const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rating: {type: Number, required:true},
    content: {type:String,required:true},
    author: {type:String,required:true},
    pageType: {type:String,required:true},
},{timestamps: true});



module.exports = mongoose.model('Review',reviewSchema,'reviews');