
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productType: {type: String, required:true},
    title: {type: String, required:true},
    slug: {type: String, required:true},
    category: {type: String,required:true},
    feature: {type: String},
    type: {type: String},
    color: {type: String},
    brand: {type: String},
    fuelType: {type: String},
    regPrice: {type: Number,required:true},
    salePrice: {type: Number},
    lowPrice: {type: Number,required:true},
    highPrice: {type: Number,required:true},
    rating: {type: Number,required:true},
    stock: {type: Number,required:true},
    modelNo: {type: String,required:true},
    itemId: {type: String,required:true},
    keyFeatures: {type: Array},
    featureVideo: {type: Object,required:true},
    threeSixty: {type: Object,required:true},
    media: {type: Array,required:true},
    tags: {type: String,required:true},
    description: {type: String,required:true},
    specification: {type: String,required:true},
    deliveryInfo: {type: String,required:true},
    metaTitle: {type: String},
    metaDescription: {type: String},
    metaKeywords: {type: String},
},{timestamps: true});

module.exports = mongoose.model('Product',productSchema,'products');