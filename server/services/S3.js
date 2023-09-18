const AWS3 = require('@aws-sdk/client-s3');

// Create an S3 instance
const s3 = new AWS3.S3Client({credentials:{accessKeyId: process.env.AWS_S3_USER_ACCESS_KEY,secretAccessKey: process.env.AWS_S3_USER_SECRET_ACCESS_KEY},region: process.env.AWS_S3_REGION})

module.exports = s3; // Export the configured S3 instance
