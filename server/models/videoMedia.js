const mongoose = require('mongoose')

const videoMediaSchema = new mongoose.Schema({
    url: {type: String, required:true},
    type: {type:String,required:true},
    section: {type:String,required:true},
},{timestamps: true});

module.exports = mongoose.model('VideoMedia',videoMediaSchema,'videoMedias');