const AWS3 = require('@aws-sdk/client-s3')
const S3Client = require('./S3')


class AWSService{
    static async uploadFile(image,prefix){
     const newImageName = prefix + Date.now() + '-' + image.name
     const updateImg = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/` + newImageName
     let uploadParams = {Key: newImageName,Bucket: process.env.AWS_S3_BUCKET_NAME, Body: image.data}
     const command = new AWS3.PutObjectCommand(uploadParams)
     const response = await S3Client.send(command)
     return {response,updateImg}
    }

    static async deleteFile(image){
        const url = image;
        const searchString = "amazonaws.com/";
        
        const startIndex = url.indexOf(searchString)
        const substring = url.substring(startIndex + searchString.length);
        
        const s3 = new AWS3.S3Client({credentials:{accessKeyId: process.env.AWS_S3_USER_ACCESS_KEY,secretAccessKey: process.env.AWS_S3_USER_SECRET_ACCESS_KEY},region: process.env.AWS_S3_REGION})
        const params = {
          Key: substring,
          Bucket: process.env.AWS_S3_BUCKET_NAME,
        };
        const command = new AWS3.DeleteObjectCommand(params);
        const resp = await s3.send(command)
        // console.log(resp)
        return {resp}
    }
    static async deleteMultiFiles(images){
        console.log(images)
        let imgKeys = [];
        let searchString = "amazonaws.com/";
        images.forEach(item=>{
          const startIndex = item.indexOf(searchString)
          const substring = item.substring(startIndex + searchString.length);
          imgKeys.push({Key:substring})
        })
        console.log(imgKeys)
        
        const s3 = new AWS3.S3Client({credentials:{accessKeyId: process.env.AWS_S3_USER_ACCESS_KEY,secretAccessKey: process.env.AWS_S3_USER_SECRET_ACCESS_KEY},region: process.env.AWS_S3_REGION})
        const params = {
          Bucket: process.env.AWS_S3_BUCKET_NAME,
          Delete:{
            Objects: imgKeys
          },
        };
        const command = new AWS3.DeleteObjectsCommand(params);
        const resp = await s3.send(command)
        return {resp}
    }
    static async duplicateFile(image,prefix){
        const url = image
        const searchString = "amazonaws.com/";
        const startIndex = url.indexOf(searchString)
        const sourceUrl = url.substring(startIndex + searchString.length);

        const s3 = new AWS3.S3Client({credentials:{accessKeyId: process.env.AWS_S3_USER_ACCESS_KEY,secretAccessKey: process.env.AWS_S3_USER_SECRET_ACCESS_KEY},region: process.env.AWS_S3_REGION})
        const newImageName = prefix + Date.now() + '-' + '(dup)'
        const updateImg = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/` + newImageName;

        const copyParams = {
          Bucket: process.env.AWS_S3_BUCKET_NAME,
          CopySource: process.env.AWS_S3_BUCKET_NAME + '/' + sourceUrl,
          Key: newImageName
        };
        const command = new AWS3.CopyObjectCommand(copyParams);
        const resp = await s3.send(command)
        // console.log(resp)
        return {resp,updateImg}
    }
}

module.exports = AWSService;
