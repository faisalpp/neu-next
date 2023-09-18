const Help = require('../../../../server/models/helpNsupport');
const BlogDTO = require('../../../../server/dto/admin/blog');
const Joi = require('joi')

const helpController = {
    async createHelp(req, res, next) {
        const helpSchema = Joi.object({
            title: Joi.string().required(),
            slug: Joi.string().required(),
            shortDescription: Joi.string().required(),
            category: Joi.string().required(),
            content: Joi.string().required(),
          });
          const { error } = helpSchema.validate(req.body);
          
          // 2. if error in validation -> return error via middleware
          if (error) {
            return next(error)
          }
          
          // 3. if email or username is already registered -> return an error
          const {title,slug,shortDescription,category,content } = req.body;
          
          const titleInUse = await Help.exists({ title });        
          if (titleInUse) {
            const error = {
              status: 409, message:'Help & Support Already Exist!'
            }
            return next(error)
          }

          try{
            const HelpToCreate = new Help({title,slug,shortDescription,category,content});
             await HelpToCreate.save();
            return res.status(200).json({status: 200, msg:'Help & Support Created Successfuly!'});
           }catch(err){
             const error = {status:500,msg:"Internal Server Error!"}
             return next(error)
           }
    },

    async updateHelp(req,res,next){
        const helpSchema = Joi.object({
            id: Joi.string().required(),
            title: Joi.string().required(),
            slug: Joi.string().required(),
            shortDescription: Joi.string().required() ,
            category: Joi.string().required(),
            content: Joi.string().required(),
          });
          const { error } = helpSchema.validate(req.body);
          
          // 2. if error in validation -> return error via middleware
          if (error) {
            return next(error)
          }
          
          // 3. if email or username is already registered -> return an error
          const {id,title,slug,shortDescription,category,content } = req.body;
          
          const inUse = await Help.exists({ _id:id });        
          if (!inUse) {
            const error = {
              status: 409, message:'Help & Support Not Found!'
            }
            return next(error)
          }

        try {
         const updatedBlog = await Help.findByIdAndUpdate(
           id,
           {title,slug,shortDescription,category,content},
           { new: true }
         );
         return res.status(200).json({status:200,msg:'Help & Support Updated Successfully!'});
        
        } catch (error) {
           const err = {status:500,msg:"Internal Server Error!"}
           return next(err);
        }
    },
    async deleteHelp(req, res, next) {
        const helpSchema = Joi.object({
            id: Joi.string().required(),
          });
          const { error } = helpSchema.validate(req.body);
          
          // 2. if error in validation -> return error via middleware
          if (error) {
            return next(error)
          }
      
          const {id} = req.body;
          
          try{
           await Help.findByIdAndDelete(id);
          }catch(error){
            return next(error)
          }
          return res.status(200).json({status:200,msg:'Help & Support Deleted Successfully!'});
    },

    async duplicateHelp(req, res, next) {
      const blogSchema = Joi.object({
          slug: Joi.string().required(),
        });
        const { error } = blogSchema.validate(req.body);
        
        // 2. if error in validation -> return error via middleware
        if (error) {
          return next(error)
        }
        
        // 3. if email or username is already registered -> return an error
        const {slug} = req.body;
        
        const blog = await Help.findOne({ slug });  
        if (blog) {
            const title = blog.title + '(Duplicate)' + Date.now();
            const slug = title.toLocaleLowerCase().replace(/\s/g,'-');
            try{
              const BlogToCreate = new Help({title:title,slug:slug,category:blog.category,shortDescription:blog.shortDescription,content:blog.content});
              await BlogToCreate.save();
              return res.status(200).json({status: 200, msg:'Help & Support Duplicate Created!'});
            }catch(err){
              const error = {status:500,message:"Internal Server Error!"}
              return next(error)
            }
        }else{
          return res.status(404).json({status: 404, message:'Help & Support Does Not Exist!'});
        }  
  },

    async getHelpByCategory(req, res, next) {
      const blogSchema = Joi.object({
          category: Joi.string().required(),
        });
        const { error } = blogSchema.validate(req.body);
        
        // 2. if error in validation -> return error via middleware
        if (error) {
          return next(error)
        }
    
        const {category} = req.body;
        
        try{
          let page = Number(req.query.page)
          let limit = Number(req.query.limit)
          let skip = (page - 1) * limit;
          // console.log(category)
          if(category !== 'all-categories'){
            const helps = await Help.find({category:category}).skip(skip).limit(limit);     
            const totalCount = await Help.countDocuments({category:category});
            
            let blogsDTOs=[];
            helps.forEach((blog) => {
              const blogDto = new BlogDTO(blog);
              blogsDTOs.push(blogDto);
            });
            return res.status(200).json({status: 200, helps:blogsDTOs,totalCount:totalCount});
          }else{
            const helps2 = await Help.find({}).skip(skip).limit(limit); 
            const totalCount2 = await Help.countDocuments();
            let blogsDTOs2=[];
            helps2.forEach((blog) => {
              const blogDto2 = new BlogDTO(blog);
              blogsDTOs2.push(blogDto2);
            });
            return res.status(200).json({status: 200, helps:blogsDTOs2,totalCount:totalCount2});
          }
        }catch(error){
          return next(error)
        }
    
    },

      async getHelpBySearch(req, res, next) {
        const helpSchema = Joi.object({
            title: Joi.string().allow(null).empty(''),
          });
          const { error } = helpSchema.validate(req.body);
          
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
            const helps = await Help.find(queryObject).skip(skip).limit(limit); 
            
            const totalCount = await Help.countDocuments();
            console.log(totalCount)
            return res.status(200).json({status: 200, helps:helps,totalCount:totalCount});
          }catch(error){
            return next(error)
          }
      
      },

      async getHelpBySlug(req, res, next) {
        const helpSchema = Joi.object({
            slug: Joi.string().required(),
          });
          const { error } = helpSchema.validate(req.body);
          
          // 2. if error in validation -> return error via middleware
          if (error) {
            return next(error)
          }
    
          const {slug} = req.body;
    
          try{
            const help = await Help.find({slug:slug});        
            return res.status(200).json({status: 200, help:help});
          }catch(error){
            return next(error)
          }
    
    }
      
}

module.exports = helpController