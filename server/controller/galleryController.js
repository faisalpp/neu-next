const Joi = require('joi')
const Gallery = require('../../server/models/gallery')
const AWSService = require('../../server/services/S3Upload')

const galleryController = {
  async uploadGalleryImage(req, res, next) {

    if(!req.files){
      return res.status(500).json({ status: 500, message: 'Image Required!' });
    }
    const imageKeys = Object.keys(req.files).filter(key => key.startsWith('image_'));
    
    const imgPaths = [];
    for (const key of imageKeys) {
      const file = req.files[key];
      const {response,updateImg} = await AWSService.uploadFile({name:file.name,data:file.data},'gallery/')
      if(response.$metadata.httpStatusCode === 200){
        imgPaths.push(updateImg)
      }else{
        return res.status(500).json({ status: 500, message: 'Cloud Internal Server Error!' });
      }
    }
    
    
    if(imageKeys.length === imgPaths.length){
      try{
        for(const img of imgPaths){
          const newImage = new Gallery({
            url:img,
          });
          newImage.save();
        }
        return res.status(200).json({ status: 200, msg: 'Image Uploaded Successfully!' });
      }catch(error){
        return res.status(500).json({ status: 500, message: 'Internal Server Error!' });
      }
    }else{
      return res.status(500).json({ status: 500, message: 'Cloud Internal Server Error!' });
    }
     

 },
 async getGalleryImage(req, res, next) {

    try{
        let page = Number(req.query.page) 
        let limit = Number(req.query.limit) 

        let skip = (page - 1) * limit;

        const gallery = await Gallery.find({}).skip(skip).limit(limit);
        const totalCount = await Gallery.countDocuments();
        return res.status(200).json({status:200,gallery:gallery,totalCount:totalCount});
    }catch(error){
        return next(error)
    }

 },
 
 async deleteGalleryImage(req, res, next) {
  const gallerySchema = Joi.object({
    id: Joi.string().required(),
  });
  const { error } = gallerySchema.validate(req.body);
  
  // 2. if error in validation -> return error via middleware
  if (error) {
    return next(error)
  }
  
  // 3. if email or username is already registered -> return an error
  const {id } = req.body;

  const gallImg = await Gallery.findOne({_id:id})

  if(!gallImg){
    return res.status(500).json({ status: 500, message: 'Gallery Image Not Found!' });
  }

  const {resp} = await AWSService.deleteFile(gallImg.url)

  if(resp.$metadata.httpStatusCode === 204){
    try{
      const blog = await Gallery.findByIdAndDelete(id);
      return res.status(200).json({ status: 200, msg: 'Image Deleted Successfully!' });
    }catch(error){
      return res.status(500).json({ status: 500, message: 'Internal Server Error!' });
    }
  }else{
    return res.status(500).json({ status: 500, message: 'Cloud Internal Server Error!' });
  }
 },


}

module.exports = galleryController