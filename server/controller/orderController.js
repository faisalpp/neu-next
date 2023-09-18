const Joi = require("joi");
const OrderAddress = require('../../server/models/orderAddress')
const Cart = require('../../server/models/cart')

const orderController = {

 async saveOrderAddress(req, res, next) {
    // 1. validate user input
   const getCartSchema = Joi.object({
     userId: Joi.string().required(),
     email: Joi.string().required(),
     keepUpdates: Joi.boolean().required(),
     firstName: Joi.string().allow(null).empty(''),
     lastName: Joi.string().required(),
     address: Joi.string().required(),
     appartment: Joi.string().allow(null).empty(''),
     city: Joi.string().required(),
     country: Joi.string().required(),
     province: Joi.string().required(),
     postalCode: Joi.string().required(),
     phone: Joi.string().required(),
     saveAddress: Joi.boolean().required(),
   });
   const { error } = getCartSchema.validate(req.body);
  
   // 2. if error in validation -> return error via middleware
   if (error) {
     return next(error)
   }
  
   const {userId,email,keepUpdates,firstName,lastName,address,appartment,city,country,province,postalCode,phone,saveAddress} = req.body;

   try{
     
    const orderAddressToCreate = new OrderAddress({
     userId,
     email,
     firstName,
     lastName,
     address,
     appartment,
     city,
     country,
     province,
     postalCode,
     phone,
     isUpdates: keepUpdates,
     isSaved: saveAddress
    });
  
    const savedAddress = await orderAddressToCreate.save();
    
     const ee = await Cart.findOneAndUpdate(userId, {addressId:savedAddress._id}, { new: true });
     
    
    
    res.status(200).json({status: 200,msg:"Order Address Saved!"});
  
   }catch(err){
    const error = {status:500,message:'Internal Server Error!'}
    return next(error)
   }
  
  },

}

module.exports = orderController