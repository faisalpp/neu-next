const mongoose = require('mongoose')

const sectionItemSchema = new mongoose.Schema({
    index: {type:Number},
    title: {type:String},
    rating: {type:String,default:null},
    image: {type: String, required:true},
    sectionId: {type: mongoose.SchemaTypes.ObjectId, ref: 'categorySection',required:true},
},{timestamps: true});


sectionItemSchema.pre('save', async function (next) {
    if (!this.index) {
        try {
            const count = await this.constructor.countDocuments({ sectionId: this.sectionId }).exec();
            this.index = count + 1;
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

module.exports = mongoose.model('SectionItem',sectionItemSchema,'sectionitems');