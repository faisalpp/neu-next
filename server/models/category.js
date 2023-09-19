const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    index: {type: Number},
    title: {type:String,required:true,unique:true},
    slug: {type:String,required:true,unique:true},
    description: {type:String,required:true},
    image: {type: String, required:true},
    inMenu: {type: Boolean, required:true},
},{timestamps: true});

categorySchema.pre('save', async function (next) {
  if (!this.index) {
      try {
          const count = await this.constructor.countDocuments().exec();
          this.index = count + 1;
          next();
      } catch (error) {
          next(error);
      }
  } else {
      next();
  }
});

module.exports = mongoose.model('Category',categorySchema,'categories');