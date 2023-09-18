const mongoose = require('mongoose')

const orderAddressSchema = new mongoose.Schema({
    userId: {type: mongoose.SchemaTypes.ObjectId, ref: 'User',required:true},
    email: {type: String, required:true},
    firstName: {type: String},
    lastName: {type: String, required:true},
    address: {type: String, required:true},
    appartment: {type: String},
    city: {type: String, required:true},
    country: {type: String, required:true},
    province: {type: String, required:true},
    postalCode: {type: String, required:true},
    phone: {type: String, required:true},
    isUpdates: {type: Boolean, required:true},
    isSaved: {type: Boolean, required:true},
},{timestamps: true});

module.exports = mongoose.model('OrderAddress',orderAddressSchema,'orderAddresses');