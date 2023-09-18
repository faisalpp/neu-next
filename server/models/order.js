const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  deliveryOrders: [{
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    salePrice: { type: Number, required: true },
    regularPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
  }],
  pickupOrders: [{
    name: { type: String, required: true },
    url: { type: String, required: true },
    salePrice: { type: Number, required: true },
    regularPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
  }],
  paymentMethod: { type: String, required: true },
  paymentStatus: { type: String, required: true },
});

module.exports = mongoose.model('Order', orderSchema, 'orders');
