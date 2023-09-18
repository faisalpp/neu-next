const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    index: {type: Number},
    name: {type: String, required:true},
    designation: {type:String,required:true},
    image: {type:String,required:true},
},{timestamps: true});


teamSchema.pre('save', async function (next) {
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

module.exports = mongoose.model('Team',teamSchema,'teams');