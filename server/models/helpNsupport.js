const mongoose = require('mongoose')

const helpSupportSchema = new mongoose.Schema({
    title: {type:String,required:true,unique:true},
    slug: {type:String,required:true,unique:true},
    category: {type:String,required:true},
    shortDescription: {type:String,required:true},
    content: {type:String,required:true},
},{timestamps: true});

module.exports = mongoose.model('HelpNsupport',helpSupportSchema,'helpNsupports');