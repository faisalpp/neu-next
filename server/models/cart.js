const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  deliveryOrders: [{
    pid: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    salePrice: { type: Number, required: true },
    regularPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
  }],
  deliveryLocation: { type: String },
  deliveryDate: { type: String },
  deliveryTime: { type: String },
  pickupOrders: [{
    pid: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    salePrice: { type: Number, required: true },
    regularPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
  }],
  pickupLocation: { type: String},
  cartCount:{type: Number,default:0},
  total:{type: Number,default:0},
  addressId:{type: mongoose.Schema.Types.ObjectId, ref: 'OrderAddress'},
  expiry: {type:String},
});

module.exports = mongoose.model('Cart',cartSchema,'carts');