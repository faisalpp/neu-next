const UserProfileDTO = require('../dto/profile')
const User = require("../models/user");
const userProfileController = {
    
 // Get User Profile
 async getUserProfile(req,res,next) {
    
    const {_id} = req.body
    try {
      const user = await User.findOne({_id});
     if(!user){
       const error = {status: 401,message: "Invalid Credentials!"}
       return next(error);
     }

     const userDto = new UserProfileDTO(user);
     return res.status(200).json({status:200,user: userDto,msg:'Login Successful!',auth:true});

    } catch (error) {
        return next(error);
    }
 },

 async UpdateProfile(req,res,next){
    const {_id,firstName,lastName,email,country} = req.body;
    try {
      
      const updateUser = await User.findByIdAndUpdate(
        _id,
        { firstName, lastName ,email, country},
        { new: true }
        );

        if(!updateUser){
          const error = {status: 401,message: "Invalid Credentials!"}
          return next(error);
        }
        
        return res.status(200).json({status:200,msg:'User Profile Updated!'});

    } catch (error) {
      return next(error);
    }

 },

}



module.exports = userProfileController;