
const HelpTab = require('../../../models/helpNSupportTab');
const Joi = require('joi')

const helpTabController = {   
    async createHelpTab(req, res, next) {
    const helpSchema = Joi.object({
        title: Joi.string().required(),
      });
      const { error } = helpSchema.validate(req.body);
      
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }
      
      const {title} = req.body;
      
      const titleInUse = await HelpTab.exists({ title });        
      if (titleInUse) {
        const error = {
          status: 409, message:'Help & Support Tab Already Exist!'
        }
        return next(error)
      }

      try{
        const slug = title.toLowerCase().replace(/\s/g,'-');
        const HelpTabCreate = new HelpTab({title,slug});
         await HelpTabCreate.save();
        return res.status(200).json({status: 200, msg:'Help & Support Tab Created!'});
       }catch(err){
         const error = {status:500,msg:"Internal Server Error!"}
         return next(error)
       }
    },

    async getHelpTabs(req, res, next) {    
      try{
        const helpTabs = await HelpTab.find({});     
        return res.status(200).json({status: 200, helpTabs});
      }catch(error){
        return next(error)
      }
    }
}

module.exports = helpTabController