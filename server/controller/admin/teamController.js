const Joi = require('joi')
const Team = require('../../../server/models/team')
const AWSService = require('../../../server/services/S3Upload')


const teamController = {
    async createMember(req, res, next) {
        const memberSchema = Joi.object({
            name: Joi.string().required(),
            designation: Joi.string().required()
        });
      
          const { error } = memberSchema.validate(req.body);
          
          // 2. if error in validation -> return error via middleware
          if (error) {
            return next(error)
          }

          const { name, designation } = req.body;
          if(!req.files.image){
            const error = {
                status: 500,
                message: "Image required!"
              }
              return next(error)
          }

          const {response,updateImg} = await AWSService.uploadFile({name:req.files.image.name,data:req.files.image.data},'team/')
          if(response.$metadata.httpStatusCode === 200){
           try{
             const MemberToCreate = new Team({name,designation,image:updateImg});
             await MemberToCreate.save();
             return res.status(200).json({status: 200, msg:'Team Member Created!'});
            }catch(err){
              const error = {status:500,msg:"Internal Server Error!"}
              return next(error)
            }
          }else{
            const error = {
                status: 500,
                message: "AWS S3 Internal Server Error!"
              }
              return next(error)
          }
    },
    async updateMember(req,res,next){
      const memberSchema = Joi.object({
        id: Joi.string().required(),
        name: Joi.string().required(),
        designation: Joi.string().required(),
        image: Joi.string().allow(null).empty(''),
        oldImg: Joi.string().required(),
        tempImg: Joi.string().allow(null).empty('')
      });

      const { error } = memberSchema.validate(req.body);
          
      // 2. if error in validation -> return error via middleware
      if (error) {
        // console.log(error)
        return next(error)
      }

      const { id,name, designation,image,tempImg,oldImg } = req.body;

      if(tempImg === ''){
        try{
         const updatedBlog = await Team.findByIdAndUpdate(
          id,
          {name,designation,image:image},
          { new: true }
        );
         return res.status(200).json({status: 200, msg:'Team Member Updated!'});
        }catch(err){
         const error = {status:500,msg:"Internal Server Error!"}
         return next(error)
        }
      }else{
        const {resp} = await AWSService.deleteFile(oldImg)
        console.log(resp)
        if(resp.$metadata.httpStatusCode !== 204){
          const error = {
            status: 500,
            message: "AWS S3 Internal Server Error!"
           }
           return next(error)
        }
        const {response,updateImg} = await AWSService.uploadFile({name:req.files.image.name,data:req.files.image.data},'team/')
        if(response.$metadata.httpStatusCode === 200){
         try{
          const updatedBlog = await Team.findByIdAndUpdate(
            id,
            {name,designation,image:updateImg},
            { new: true }
          );  
          return res.status(200).json({status: 200, msg:'Team Member Updated!'});
         }catch(err){
          const error = {status:500,messge:"Internal Server Error!"}
          return next(error)
         }
        }else{
         const error = {
          status: 500,
          message: "AWS S3 Internal Server Error!"
         }
           return next(error)
        }
      }



    },
    async deleteMember(req,res,next){
      const memberSchema = Joi.object({
        id: Joi.string().required(),
      });

      const { error } = memberSchema.validate(req.body);
          
      // 2. if error in validation -> return error via middleware
      if (error) {
        console.log(error)
        return next(error)
      }

      const { id } = req.body;

      const isMember = await Team.findOne({_id:id});
      // console.log(isMember)
      if(!isMember){
        const error = {status:500,messge:"Team Member Not Found!"}
        return next(error)
      }

     try{
      const {resp} = await AWSService.deleteFile(isMember.image)
         if(resp.$metadata.httpStatusCode === 204){
           await Team.findByIdAndDelete(id);
           return res.status(200).json({msg:"Team Member Deleted!"});
         }
      }catch(error){
        return next(error)
      }
    },
    async getMembers(req,res,next){
     try{
       const members = await Team.find({}).sort({ index: 1 });
       return res.status(200).json({status:200,members:members});
      }catch(error){
        return next(error)
      }
    },
    async updateMembersPosition(req,res,next){
  
      const data = req.body;
      // Create an array of update operations
      const updateOperations = data.map(({ _id, index }) => ({
        updateOne: {
            filter: { _id },
            update: { $set: { index } }
        }
      }));
      // Execute the bulk update operation
      try{
        const update  = await Team.bulkWrite(updateOperations)
        return res.status(200).json({status:200,msg:'Team Member Updated!'});
      }catch(err){
        const error = {status:500,messge:"Internal Server Error!"}
          return next(error)
      }

     },
}

module.exports = teamController;