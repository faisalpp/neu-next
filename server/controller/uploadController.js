const fs = require('fs')

const uploadController = {
    async uploadImage(req,res,next){
     const file = req.files.media
     if(!file){
        return res.status(500).json({status: 500, msg:'Media File Required!'});
     }
     const location = req.body.location
    const {response,updateImg} = await AWSService.uploadFile({name:file.name,data:file.data},location)
    if(response.$metadata.httpStatusCode === 200){
     return res.status(200).json({status: 200, url:updateImg});
    }else{
     return res.status(500).json({status: 500, msg:'AWS Internal Server Error!'});
    }
   },
async deleteMedia(req,res,next){

 const {file,type} = req.body;
 
 if(type === 'images'){
  const filePath = `storage/uploads/images/${file}`; // Replace with the actual file path 
  fs.unlink(filePath, (err) => {
      if (err) {
          const error = {
              status: 500,
              message:'Internal Server Error!'
             }
             return next(error)
         }
         res.status(200).send({status:200,message:'Image Deleted Successfully!'});
     })
   }else{
    const filePath = `storage/uploads/videos/${file}`; // Replace with the actual file path 
    fs.unlink(filePath, (err) => {
        if (err) {
            const error = {
                status: 500,
                message:'Internal Server Error!'
               }
               return next(error)
           }
       })
       res.status(200).send({status:200,message:'Video Deleted Successfully!'});
   }
 
 },

}

module.exports = uploadController