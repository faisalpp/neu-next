const Tip = require('../../../server/models/applianceTips')
const Joi = require('joi')
const RecentBlogDTO = require('../../../server/dto/blog/recentBlog')
const AWS3 = require('@aws-sdk/client-s3')
const S3Client = require('../../../server/services/S3')
const AWSService = require('../../../server/services/S3Upload')

const AWS_S3_USER_ACCESS_KEY = process.env.AWS_S3_USER_ACCESS_KEY
const AWS_S3_USER_SECRET_ACCESS_KEY = process.env.AWS_S3_USER_SECRET_ACCESS_KEY
const AWS_S3_REGION = process.env.AWS_S3_REGION
const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME

const tipsController = {
    async createTip(req, res, next) {
        const tipSchema = Joi.object({
            title: Joi.string().required(),
            slug: Joi.string().required(),
            thumbnail: Joi.allow(null).empty(''),
            category: Joi.string().required(),
            content: Joi.string().required(),
          });
          const { error } = tipSchema.validate(req.body);
          
          // 2. if error in validation -> return error via middleware
          if (error) {
            return next(error)
          }
          
          // 3. if email or username is already registered -> return an error
          const {title,slug,thumbnail,category,content } = req.body;
          
          const titleInUse = await Tip.exists({ title });        
          if (titleInUse) {
            const error = {
              status: 409, message:'Appliance Tip Already Exist!'
            }
            return next(error)
          }
          const {response,updateImg} = await AWSService.uploadFile({name:req.files.thumbnail.name,data:req.files.thumbnail.data},'appliance-tips/')
             
             if(response.$metadata.httpStatusCode === 200){
               try{
                const TipToCreate = new Tip({title,slug,thumbnail:updateImg,category,content});
                const tip = await TipToCreate.save();
                return res.status(200).json({status: 200, msg:'Appliance Tip Created Successuly!'});
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
    async duplicateTip(req, res, next) {
      const tipSchema = Joi.object({
          slug: Joi.string().required(),
        });
        const { error } = tipSchema.validate(req.body);
        
        // 2. if error in validation -> return error via middleware
        if (error) {
          return next(error)
        }
        
        // 3. if email or username is already registered -> return an error
        const {slug} = req.body;
        
        const tip = await Tip.findOne({ slug });  
        if (tip) {
          const {resp,updateImg} = await AWSService.duplicateFile(tip.thumbnail,'appliance-tips/')
          if(resp.$metadata.httpStatusCode === 200){
            const title = tip.title + '(Duplicate)';
            const slug = title.toLocaleLowerCase().replace(/\s/g,'-');
            try{
              const TipToCreate = new Tip({title:title,slug:slug,thumbnail:updateImg,category:tip.category,content:tip.content});
              await TipToCreate.save();
              return res.status(200).json({status: 200, msg:'Appliance Tip Duplicate Created!'});
            }catch(err){
              const error = {status:500,message:"Internal Server Error!"}
              return next(error)
            }
          }else{
            return res.status(500).json({status: 500, message:'AWS Cloud Internal Server Error!'});
          }
        }else{
          return res.status(404).json({status: 404, message:'Appliance Tip Does Not Exist!'});
        }  
  },
    async updateTip(req, res, next) {
      const tipSchema = Joi.object({
          id: Joi.string().required(),
          title: Joi.string().required(),
          slug: Joi.string().required(),
          thumbnail: Joi.string().required() ,
          tempImg: Joi.string().allow(null).empty(''),
          category: Joi.string().required(),
          content: Joi.string().required(),
        });
        const { error } = tipSchema.validate(req.body);
        
        // 2. if error in validation -> return error via middleware
        if (error) {
          return next(error)
        }
        
        // 3. if email or username is already registered -> return an error
        const {id,title,slug,thumbnail,tempImg,category,content } = req.body;
        
        const inUse = await Tip.exists({ _id:id });        
        if (!inUse) {
          const error = {
            status: 409, message:'Appliance Tip Not Found!'
          }
          return next(error)
        }

        if(tempImg === ''){
          try {
              const updatedBlog = await Tip.findByIdAndUpdate(
                id,
                {title,slug,thumbnail,category,content},
                { new: true }
              );
      
              return res.status(200).json({status:200,msg:'Appliance Tip Updated Successfully!'});
          
              } catch (error) {
                const err = {status:500,msg:"Internal Server Error!"}
                return next(err);
              }
        }else{
          const {resp} = await AWSService.duplicateFile(thumbnail)
          try{
           if(resp.$metadata.httpStatusCode === 200){
             const {response,updateImg} = await AWSService.uploadFile({name:req.files.thumbnail.name,data:req.files.thumbnail.data},'appliance-tips/')
             try{
               if(response.$metadata.httpStatusCode === 200){
                try{
                  const TipToCreate = new Tip({title,slug,thumbnail:updateImg,category,content});
                  const tip = await TipToCreate.save();
                  return res.status(200).json({status: 200, msg:'Appliance Tip Updated Successuly!'});
                 }catch(err){
                   const error = {status:500,msg:"Internal Server Error!"}
                   return next(error)
                 }
               }
             }catch(error){
               const err = {status:500,message:"Cloud Internal Server Server!"} 
               return next(err)
             }

           }
          }catch(error){
           const err = {status:500,message:"Cloud Internal Server Server!"} 
           return next(err)
          }
        }
  },
    async getRecentTips(req, res, next) {

        try{
          let page = Number(req.query.page)
          let limit = Number(req.query.limit)
  
          let skip = (page - 1) * limit;

          const tips = await Tip.find({}).skip(skip).limit(limit)
          const totalCount = await Tip.countDocuments();
          
          const RecentTips = [];
          for(let i=0;i < tips.length;i++){
            const tip = new RecentBlogDTO(tips[i]);      
            RecentTips.push(tip)
          }
          
          return res.status(200).json({status: 200, tips:RecentTips,totalCount:totalCount});
        }catch(error){
          return next(error)
        }

  },
  async getTipBySlug(req, res, next) {
    const tipSchema = Joi.object({
        slug: Joi.string().required(),
      });
      const { error } = tipSchema.validate(req.body);
      
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      const {slug} = req.body;

      try{
        const tip = await Tip.find({slug:slug});        
        return res.status(200).json({status: 200, tip});
      }catch(error){
        return next(error)
      }

},
async getTipByCategory(req, res, next) {
  const tipSchema = Joi.object({
      category: Joi.string().required(),
    });
    const { error } = tipSchema.validate(req.body);
    
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }

    const {category} = req.body;
    console.log(category)
    try{
      let page = Number(req.query.page)
      let limit = Number(req.query.limit)
      let skip = (page - 1) * limit;
      if(category !== 'all-categories'){
        const tips1 = await Tip.find({category:category}).skip(skip).limit(limit); 
        const RecentTips = [];
          for(let i=0;i < tips1.length;i++){
            const tip = new RecentBlogDTO(tips1[i]);      
            RecentTips.push(tip)
          }
          const totalCount = await Tip.countDocuments({category});
        return res.status(200).json({status: 200, tips:RecentTips,totalCount:totalCount});
      }else{
        const tips2 = await Tip.find({}).skip(skip).limit(limit); 
        const RecentTips = [];
          for(let i=0;i < tips2.length;i++){
            const tip = new RecentBlogDTO(tips2[i]);      
            RecentTips.push(tip)
          }
        const totalCount2 = await Tip.countDocuments();
        return res.status(200).json({status: 200, tips:RecentTips,totalCount:totalCount2});
      }
    }catch(error){
      return next(error)
    }

},
async deleteTip(req, res, next) {
  const tipSchema = Joi.object({
      id: Joi.string().required(),
    });
    const { error } = tipSchema.validate(req.body);
    
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }

    const {id} = req.body;
    
    try{
     const tip = await Tip.findByIdAndDelete(id);
     
     if(!tip){
       return res.status(500).json({status: 500, message:'Appliance Tip Not Found!'});
     }
       try{
         const {resp} = await AWSService.deleteFile(tip.thumbnail)
         if(resp.$metadata.httpStatusCode === 204){
           return res.status(200).json({status: 200, msg:'Appliance Tip Deleted Successfully!'});    
         }
        }catch(error){
         const err = {status:500,message:"Cloud Internal Server Server!"} 
         return next(err)
        }
      }catch(error){
       return next(error)
      }
},
async getTipBySearch(req, res, next) {
  const tipSchema = Joi.object({
      title: Joi.string().allow(null).empty(''),
    });
    const { error } = tipSchema.validate(req.body);
    
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }

    const {title} = req.body;

    let queryObject = {};
    
    try{
      let page = Number(req.query.page)
      let limit = Number(req.query.limit)
      let skip = (page - 1) * limit;
      if(title){
        queryObject.title = {$regex:title,$options:"i"}
      }
      const tips = await Tip.find(queryObject).skip(skip).limit(limit); 
      
      const totalCount = await Tip.countDocuments();
      return res.status(200).json({status: 200, tips:tips,totalCount:totalCount});
    }catch(error){
      return next(error)
    }

}


}


module.exports = tipsController
  