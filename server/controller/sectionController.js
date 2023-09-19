const categorySection = require("../../server/models/categorySection");
const sectionItem = require("../../server/models/sectionItem");
const Joi = require("joi");
const AWSService = require('../../server/services/S3Upload')

const sectionController = {
    async CreateSection(req,res,next){
    
    // 1. validate user input
    const sectionRegisterSchema = Joi.object({
        title: Joi.string().required(),
        cardStyle: Joi.string().required(),
        type: Joi.string().required(),
        Slug: Joi.string().required(),
        slug: Joi.string().required(),
      });
      const { error } = sectionRegisterSchema.validate(req.body);
  
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      const {cardStyle,title,Slug,slug,type} = req.body;
      
      try {
        

      const titleInUse = await categorySection.exists({ title });
  
        if (titleInUse) {
          const error = {
            status: 409,
            message: "Category Section Already Exits!",
          };
  
          return next(error);
        }

    
          const categorySectionToRegister = new categorySection({
            cardStyle,
            type,
            title,
            slug: Slug,
            categorySlug:slug
          });

    
         await categorySectionToRegister.save();

        return res.status(200).json({status:200,msg:'Category Section Created!'});
    
        } catch (error) {
          return next(error);
        }
    },
    async UpdateSection(req,res,next){
    
      // 1. validate user input
      const sectionRegisterSchema = Joi.object({
          title: Joi.string().required(),
          cardStyle: Joi.string().required(),
          slug: Joi.string().required(),
          type: Joi.string().required(),
          sectionId: Joi.string().required(),
        });
        const { error } = sectionRegisterSchema.validate(req.body);
    
        // 2. if error in validation -> return error via middleware
        if (error) {
          return next(error)
        }
  
        const {cardStyle,title,slug,sectionId,type} = req.body;

        
        try {
          
  
        const findSection = await categorySection.find({ _id:sectionId });
    
          if (!findSection) {
            const error = {
              status: 404,
              message: "Category Section Not Found!",
            };
    
            return next(error);
          }
      
          const updatedSection = await categorySection.findByIdAndUpdate(
            sectionId,
            {cardStyle:cardStyle,title:title,slug:slug,type:type},
            { new: true }
          );
  
          return res.status(200).json({status:200,msg:'Category Section Updated Successfully!'});
      
          } catch (error) {
            return next(error);
          }
      },

      async UpdateSectionsIndex(req,res,next){
    
        // 1. validate user input
        const sectionRegisterSchema = Joi.object({
            sections: Joi.array().required(),
          });
          const { error } = sectionRegisterSchema.validate(req.body);
      
          // 2. if error in validation -> return error via middleware
          if (error) {
            return next(error)
          }
    
          const {sections} = req.body;

           // Create an array of update operations
           const updateOperations = sections.map(({ _id, index }) => ({
             updateOne: {
                 filter: { _id },
                 update: { $set: { index } }
             }
           }));
           // Execute the bulk update operation
           try{
             const update  = await categorySection.bulkWrite(updateOperations)
             return res.status(200).json({status:200,msg:'Sections Position  Updated!'});
           }catch(err){
             const error = {status:500,messge:"Internal Server Error!"}
               return next(error)
           }
        },

        async DeleteSection(req, res, next) {
          const blogSchema = Joi.object({
              id: Joi.string().required(),
            });
            const { error } = blogSchema.validate(req.body);
            
            // 2. if error in validation -> return error via middleware
            if (error) {
              return next(error)
            }
        
            const {id} = req.body;
            let delImgs = [];
            let delSectionItems = [];
            let sectionItems;
            try{
              sectionItems = await categorySection.findOne({_id:id}).populate('sectionItemsId').exec()
            }catch(err){
              return res.status(500).json({message:"Internal Server Server!"})
            }
            if(sectionItems){
              sectionItems.sectionItemsId.forEach(item=>{
                delImgs.push(item.image)
                delSectionItems.push(item._id)
              });
            }
            const {resp} = await AWSService.deleteMultiFiles(delImgs)
            if(resp.$metadata.httpStatusCode === 200){
                try{
                  await categorySection.findByIdAndDelete(id);
                  await sectionItem.deleteMany({
                    _id: { $in: delSectionItems }
                  });
                  return res.status(200).json({status: 200, msg:'Section Deleted!'});    
                }catch(err){
                  return res.status(500).json({message:"Internal Server Server!"})
                }
            }else{
              return res.status(500).json({message:"Cloud Internal Server Server!"})
            }
        },

    async CreateSectionItem(req,res,next){
    
      // 1. validate user input
      const sectionItemRegisterSchema = Joi.object({
          title: Joi.string().allow('').allow(null),
          image: Joi.string().allow('').allow(null),
          rating: Joi.string().allow('').allow(null),
          sectionId: Joi.string().required(),
        });
        const { error } = sectionItemRegisterSchema.validate(req.body);
    
        // 2. if error in validation -> return error via middleware
        if (error) {
          return next(error)
        }

        if(!req.files){
          return res.status(500).json({status:500,message:'Image Required!'});
        }
  
        const {title,rating,sectionId} = req.body;
        
        
        const {response,updateImg} = await AWSService.uploadFile({name:req.files.image.name,data:req.files.image.data},'section-items/')
          if(response.$metadata.httpStatusCode === 200){
            try {
            const sectionItemToRegister = new sectionItem({
              title,
              image:updateImg,
              rating,
              sectionId,
            });
            
            await sectionItemToRegister.save()
           .then(savedSectionItem => {
            // Step 3: Update the CategorySection's sectionItems array with the new SectionItem's ID
            return categorySection.updateOne(
              { _id: sectionId },
              { $push: { sectionItemsId: savedSectionItem._id } }
            );
          })
          .then(() => {
            // Step 4: SectionItem created and associated with CategorySection successfully
            return res.status(200).json({status:200,msg:'Section Item Created!'});
          })
          .catch(err => {
            return res.status(500).json({status:500,message:'Internal Server Error!'});
          });
      
          } catch (error) {
            return next(error);
          }
          }else{
            return res.status(500).json({status: 500, message:'AWS Cloud Internal Server Error!'});
          }

      },
      async UpdateSectionItem(req,res,next){
    
        // 1. validate user input
        const sectionRegisterSchema = Joi.object({
          title: Joi.string(),
          image: Joi.string().allow('').allow(null),
          tempImg: Joi.string().allow('').allow(null),
          oldImg: Joi.string().allow('').allow(null),
          rating: Joi.string().allow('').allow(null),
          sectionItemId: Joi.string().required(),
          });
          const { error } = sectionRegisterSchema.validate(req.body);
          
          // 2. if error in validation -> return error via middleware
          if (error) {
            return next(error)
          }
          
          const {image,tempImg,oldImg,title,rating,sectionItemId} = req.body;
  
          
          try {
            
    
          const findSection = await sectionItem.find({ _id:sectionItemId });
            if (!findSection) {
              const error = {
                status: 404,
                message: "Section Item Not Found!",
              };
      
              return next(error);
            }
            if(tempImg === ''){
        
            const updatedSectionItem = await sectionItem.findByIdAndUpdate(
              sectionItemId,
              {image:image,title:title,rating:rating},
              { new: true }
            );
            return res.status(200).json({status:200,msg:'Section Item Updated!'});
            }else{

              const {resp} = await AWSService.deleteFile(oldImg)
              if(resp.$metadata.httpStatusCode === 204){
                const {response,updateImg} = await AWSService.uploadFile({name:req.files.image.name,data:req.files.image.data},'section-items/')
                if(response.$metadata.httpStatusCode === 200){
                  try{ 
                    await sectionItem.findByIdAndUpdate(
                      sectionItemId,
                      {title:title,image:updateImg,mrating:rating},
                      { new: true }
                      );
                    }catch(error){
                      return res.status(500).json({message:'Internal Server Error!'});
                    }
                  return res.status(200).json({status:200,msg:'Section Item Updated!'});
                }else{
                  return res.status(500).json({message:'AWS Cloud Error!'});
                }
              
              }else{
                return res.status(500).json({message:'AWS Cloud Error!'});
              }

            }
        
            } catch (error) {
              return next(error);
            }
        },

        async UpdateSectionItems(req,res,next){
    
          // 1. validate user input
          const sectionRegisterSchema = Joi.object({
              sectionItems: Joi.array().required(),
            });
            const { error } = sectionRegisterSchema.validate(req.body);
        
            // 2. if error in validation -> return error via middleware
            if (error) {
              return next(error)
            }
      
            const {sectionItems} = req.body;
            //  console.log(sectionItems)
             // Create an array of update operations
             const updateOperations = sectionItems.map(({ _id, index }) => ({
               updateOne: {
                   filter: { _id },
                   update: { $set: { index } }
               }
             }));
             // Execute the bulk update operation
             try{
               const update  = await sectionItem.bulkWrite(updateOperations)
               return res.status(200).json({status:200,msg:'Section Items Position Updated!'});
             }catch(err){
               const error = {status:500,messge:"Internal Server Error!"}
                 return next(error)
             }
          },

        async DeleteSectionItem(req, res, next) {
          const blogSchema = Joi.object({
              id: Joi.string().required(),
            });
            const { error } = blogSchema.validate(req.body);
            
            // 2. if error in validation -> return error via middleware
            if (error) {
              return next(error)
            }
        
            const {id} = req.body;
            
            try{
             const item = await sectionItem.findByIdAndDelete(id);
             
             if(!item){
               return res.status(500).json({status: 500, message:'Section Item Not Found!'});
             }
        
               try{
                 const {resp} = await AWSService.deleteFile(item.image)
                 if(resp.$metadata.httpStatusCode === 204){
                   return res.status(200).json({status: 200, msg:'Section Item Deleted!'});    
                 }
                }catch(error){
                 const err = {status:500,message:"Cloud Internal Server Server!"} 
                 return next(err)
                }
              }catch(error){
               return next(error)
              }
        },

      async GetSectionItems(req,res,next){
        const {sectionId} = req.body;
        try{
          const sectionItems = await sectionItem.find({sectionId: sectionId}).sort({ index: 1 });
          return res.status(200).json({status:200,sectionItems});
        }catch(error){
          return next(error)
        }
      },

    async GetCategorySections(req,res,next){
      const {slug} = req.body;
      console.log(slug)
  
      try{
        const categorySections = await categorySection.find({categorySlug: slug}).sort({ index: 1 });

          return res.status(200).json({status:200,categorySections:categorySections});
        }catch(error){
          return next(error)
        }
    },
    async GetCategorySectionById(req,res,next){
      const {sectionId} = req.body;
  
      try{
        const section = await categorySection.find({_id:sectionId}).sort({ index: 1 });

          return res.status(200).json({status:200,section:section});
        }catch(error){
          return next(error)
        }
    },
    async GetSectionItemById(req,res,next){
      const {sectionItemId} = req.body;
      
      try{
        const item = await sectionItem.find({_id:sectionItemId}).sort({ index: 1 });

          return res.status(200).json({status:200,sectionItem:item});
        }catch(error){
          return next(error)
        }
    }

}

module.exports = sectionController;