const mongoose = require('mongoose')

const zipCodeSchema = new mongoose.Schema({
    zipCode: {type: String, required:true,unique:true},
    country: {type:String,required:true},
    city: {type:String,required:true},
    county: {type:String,required:true},
    state: {type:String,required:true},
    cords: [{type:String,required:true}],
},{timestamps: true});

module.exports = mongoose.model('ZipCode',zipCodeSchema,'zipCodes');