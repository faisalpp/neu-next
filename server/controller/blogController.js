const Blog = require('../../server/models/blog')
const Joi = require('joi')
const RecentBlogDTO = require('../../server/dto/blog/recentBlog')
const AWSService = require('../../server/services/S3Upload')

const blogController = {
    async createBlog(req, res, next) {
        const blogSchema = Joi.object({
            title: Joi.string().required(),
            slug: Joi.string().required(),
            thumbnail: Joi.allow(null).empty(''),
            category: Joi.string().required(),
            content: Joi.string().required(),
          });
          const { error } = blogSchema.validate(req.body);
          
          // 2. if error in validation -> return error via middleware
          if (error) {
            return next(error)
          }
          
          // 3. if email or username is already registered -> return an error
          const {title,slug,thumbnail,category,content } = req.body;
          
          const titleInUse = await Blog.exists({ title });        
          if (titleInUse) {
            const error = {
              status: 409, message:'Blog Already Exist!'
            }
            return next(error)
          }
          
             const {response,updateImg} = await AWSService.uploadFile({name:req.files.thumbnail.name,data:req.files.thumbnail.data},'blog/')
             if(response.$metadata.httpStatusCode === 200){
               try{
                const BlogToCreate = new Blog({title,slug,thumbnail:updateImg,category,content});
                const blog = await BlogToCreate.save();
                return res.status(200).json({status: 200, msg:'Blog Created Successuly!'});
               }catch(err){
                 const error = {status:500,massage:"Internal Server Error!"}
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
    async duplicateBlog(req, res, next) {
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
        
        const blog = await Blog.findOne({ slug });  
        if (blog) {
          const {resp,updateImg} = await AWSService.duplicateFile(blog.thumbnail,'blog/')
          if(resp.$metadata.httpStatusCode === 200){
            const title = blog.title + '(Duplicate)';
            const slug = title.toLocaleLowerCase().replace(/\s/g,'-');
            try{
              const BlogToCreate = new Blog({title:title,slug:slug,thumbnail:updateImg,category:blog.category,content:blog.content});
              await BlogToCreate.save();
              return res.status(200).json({status: 200, msg:'Blog Duplicate Created!'});
            }catch(err){
              const error = {status:500,message:"Internal Server Error!"}
              return next(error)
            }
          }else{
            return res.status(500).json({status: 500, message:'AWS Cloud Internal Server Error!'});
          }
        }else{
          return res.status(404).json({status: 404, message:'Blog Does Not Exist!'});
        }  
  },
    async updateBlog(req, res, next) {
      const blogSchema = Joi.object({
          id: Joi.string().required(),
          title: Joi.string().required(),
          slug: Joi.string().required(),
          thumbnail: Joi.string().required() ,
          tempImg: Joi.string().allow(null).empty(''),
          category: Joi.string().required(),
          content: Joi.string().required(),
        });
        const { error } = blogSchema.validate(req.body);
        
        // 2. if error in validation -> return error via middleware
        if (error) {
          return next(error)
        }
        
        // 3. if email or username is already registered -> return an error
        const {id,title,slug,thumbnail,tempImg,category,content } = req.body;
        
        const inUse = await Blog.exists({ _id:id });        
        if (!inUse) {
          const error = {
            status: 409, message:'Blog Not Found!'
          }
          return next(error)
        }

        if(tempImg === ''){
          try {
              const updatedBlog = await Blog.findByIdAndUpdate(
                id,
                {title,slug,thumbnail,category,content},
                { new: true }
              );
      
              return res.status(200).json({status:200,msg:'Blog Updated Successfully!'});
          
              } catch (error) {
                const err = {status:500,message:"Internal Server Error!"}
                return next(err);
              }
        }else{
          try{
            const {resp} = await AWSService.deleteFile(thumbnail)
           if(resp.$metadata.httpStatusCode === 200){
             try{
               const {response,updateImg} = await AWSService.uploadFile({name:req.files.thumbnail.name,data:req.files.thumbnail.data},'blog/')
               if(response.$metadata.httpStatusCode === 200){
                try{
                  const BlogToCreate = new Blog({title,slug,thumbnail:updateImg,category,content});
                  const blog = await BlogToCreate.save();
                  return res.status(200).json({status: 200, msg:'Blog Updated Successuly!'});
                 }catch(err){
                   const error = {status:500,message:"Internal Server Error!"}
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
    async GetRecentBlogs(req, res, next) {

        try{
          let page = Number(req.query.page)
          let limit = Number(req.query.limit)
  
          let skip = (page - 1) * limit;

          const blogs = await Blog.find({}).skip(skip).limit(limit)
          const totalCount = await Blog.countDocuments();
          
          const RecentBlogs = [];
          for(let i=0;i < blogs.length;i++){
            const blog = new RecentBlogDTO(blogs[i]);      
            RecentBlogs.push(blog)
          }
          
          return res.status(200).json({status: 200, blogs:RecentBlogs,totalCount:totalCount});
        }catch(error){
          return next(error)
        }

  },
  async GetBlogBySlug(req, res, next) {
    const blogSchema = Joi.object({
        slug: Joi.string().required(),
      });
      const { error } = blogSchema.validate(req.body);
      
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      const {slug} = req.body;

      try{
        const blog = await Blog.find({slug:slug});        
        return res.status(200).json({status: 200, blog:blog});
      }catch(error){
        return next(error)
      }

},
async GetBlogByCategory(req, res, next) {
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
      if(category !== 'all-categories'){
        const blogs = await Blog.find({category:category}).skip(skip).limit(limit);     
        const totalCount = blogs.length
        return res.status(200).json({status: 200, blogs:blogs,totalCount:totalCount});
      }else{
        const blogs2 = await Blog.find({}).skip(skip).limit(limit); 
        const totalCount2 = await Blog.countDocuments();
        return res.status(200).json({status: 200, blogs:blogs2,totalCount:totalCount2});
      }
    }catch(error){
      return next(error)
    }

},
async DeleteBlog(req, res, next) {
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
     const blog = await Blog.findByIdAndDelete(id);
     
     if(!blog){
       return res.status(500).json({status: 500, message:'Internal Server Errora!'});
     }

       try{
         const {resp} = await AWSService.deleteFile(blog.thumbnail)
         if(resp.$metadata.httpStatusCode === 200){
           return res.status(200).json({status: 200, msg:'Blog Deleted Successfully!'});    
         }
        }catch(error){
         const err = {status:500,message:"Cloud Internal Server Server!"} 
         return next(err)
        }
      }catch(error){
       return next(error)
      }
},
async GetBlogBySearch(req, res, next) {
  const blogSchema = Joi.object({
      title: Joi.string().allow(null).empty(''),
    });
    const { error } = blogSchema.validate(req.body);
    
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
      const blogs = await Blog.find(queryObject).skip(skip).limit(limit); 
      
      const totalCount = await Blog.countDocuments();
      return res.status(200).json({status: 200, blogs:blogs,totalCount:totalCount});
    }catch(error){
      return next(error)
    }

}


}

module.exports = blogController
  