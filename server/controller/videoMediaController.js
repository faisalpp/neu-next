const VideoMedia = require('../../server/models/videoMedia')
const Joi = require("joi");
const AWSService = require('../../server/services/S3Upload')

const videoMediaController = {
    async uploadVideoMedia(req, res, next) {
        const uploadLoopSchema = Joi.object({
            uploadMedia: Joi.string().allow(null).empty(''),
            type: Joi.string().required(),
            section: Joi.string().required(),
          });
          const { error } = uploadLoopSchema.validate(req.body);
          // 2. if error in validation -> return error via middleware
          if (error) {
            return next(error)
          }
    
          const {type,section,uploadMedia} = req.body;
        
          if(section !== 'stay-in-loop-videos'){
            const findDup = await VideoMedia.findOne({section:section});
            
            if(findDup){
              if(findDup.type === 'upload'){
                const media = await VideoMedia.findByIdAndDelete(findDup._id);
                const {resp} = await AWSService.deleteFile(findDup.url)
                if(resp.$metadata.httpStatusCode !== 204){
                  return next({status: 500,message:"AwS Cloud Error!"})
                }
              }else{
                const media = await VideoMedia.findByIdAndDelete(findDup._id);
              }
            }
          }

          if(type === "iframe"){
            // Construct the new embedded URL
            const updateUrl = uploadMedia.replace('youtu.be/','youtube.com/embed/')

            try {  
              const mediaToUpload = new VideoMedia({
                  url:updateUrl,
                  type,
                  section,
                });

               const data = await mediaToUpload.save();
      
              return res.status(200).json({status:200,msg:'Video Media Uploaded!'});
              } catch (error) {
                return next(error);
              }
          }
          
          if(type === 'upload'){
            const {response,updateImg} = await AWSService.uploadFile({name:req.files.uploadMedia.name,data:req.files.uploadMedia.data},'videos/')
            if(response.$metadata.httpStatusCode === 200){
             try {  
              const mediaToUpload = new VideoMedia({
                  url:updateImg,
                  type,
                  section,
                });

               const data = await mediaToUpload.save();
      
              return res.status(200).json({status:200,msg:'Video Media Uploaded!'});
              } catch (error) {
                return next(error);
              }
            }else{
              error = {status: 500,message:"AwS Cloud Error!"}
              return next(error)
            }
          }else{
            try {  
              const mediaToUpload = new VideoMedia({
                  url:uploadMedia,
                  type,
                  section,
                });

               const data = await mediaToUpload.save();
      
              return res.status(200).json({status:200,msg:'Video Media Uploaded!'});
              } catch (error) {
                return next(error);
              }
          }


    },
    async getVideoMedia(req,res,next){
      const uploadLoopSchema = Joi.object({
        section: Joi.string().required(),
      });
      const { error } = uploadLoopSchema.validate(req.body);
       // 2. if error in validation -> return error via middleware
       if (error) {
        return next(error)
      }
      let page = Number(req.query.page) || 1;
      let limit = Number(req.query.limit) || 3;
      
      let skip = (page - 1) * limit;
      const {section} = req.body;
    
      
      try{
        const media = await VideoMedia.find({section:section}).skip(skip).limit(limit);
        const totalCount = await VideoMedia.countDocuments({section:section});
        return res.status(200).json({status:200,media:media,totalCount:totalCount});
      }catch(error){
        return next(error)
      }
    },
    async getSingleVideoMedia(req,res,next){
      const uploadLoopSchema = Joi.object({
        section: Joi.string().required(),
      });
      const { error } = uploadLoopSchema.validate(req.body);
       // 2. if error in validation -> return error via middleware
       if (error) {
        return next(error)
      }

      const {section} = req.body;
      
      try{
        const media = await VideoMedia.find({section:section});
        return res.status(200).json({status:200,media:media});
      }catch(error){
        return next(error)
      }
    },

    async getMediaVideoMedia(req,res,next){
      const uploadLoopSchema = Joi.object({
        section: Joi.string().required(),
      });
      const { error } = uploadLoopSchema.validate(req.body);
       // 2. if error in validation -> return error via middleware
       if (error) {
        return next(error)
      }

      const {section} = req.body;
      
      try{
        const media = await VideoMedia.find({section:section});
        return res.status(200).json({status:200,media:media});
      }catch(error){
        return next(error)
      }
    },
    async deleteVideoMedia(req,res,next){
      const deleteLoopSchema = Joi.object({
        id: Joi.string().required(),
        type: Joi.string().required(),
        url: Joi.string().required(),
      });
      const { error } = deleteLoopSchema.validate(req.body);
       // 2. if error in validation -> return error via middleware
       if (error) {
        return next(error)
      }

      const {id,type,url} = req.body;
      try{
        const media = await VideoMedia.findByIdAndDelete(id);
        if(!media){
          return res.status(500).json({status: 500, message:'Internal Server Error!'});
        }
        if(type === 'upload'){
          const {resp} = await AWSService.deleteFile(url)
          if(resp.$metadata.httpStatusCode === 204 ){
            return res.status(200).json({status:200,msg:"Video Media Deleted!"})
          }else{
            const error = {status:500,message:"Cloud Internal Server Error!"}
            return next(error)
          }
        }
        return res.status(200).json({status:200,msg:"Video Media Deleted!"})
      }catch(error){
        return next(error)
      }
      

    },
}

module.exports = videoMediaController