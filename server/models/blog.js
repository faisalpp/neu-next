const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {type:String,required:true,unique:true},
    slug: {type:String,required:true,unique:true},
    thumbnail: {type:String},
    category: {type:String,required:true},
    content: {type:String,required:true},
},{timestamps: true});

module.exports = mongoose.model('Blog',blogSchema,'blogs');