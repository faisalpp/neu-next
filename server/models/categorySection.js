const mongoose = require('mongoose')

const categorySectionSchema = new mongoose.Schema({
    index: {type:Number},
    title: {type:String,required:true,unique:true},
    slug: {type:String,required:true,unique:true},
    cardStyle: {type:String},
    type: {type:String},
    categorySlug: {type: String, ref: 'Category',required:true},
    sectionItemsId: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'SectionItem' }]
},{timestamps: true});

categorySectionSchema.pre('save', async function (next) {
    if (!this.index) {
        try {
            const count = await this.constructor.countDocuments({ categorySlug: this.categorySlug }).exec();
            this.index = count + 1;
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

module.exports = mongoose.model('categorySection',categorySectionSchema,'categorySection');