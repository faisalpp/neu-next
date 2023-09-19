const Category = require("../../server/models/category");
const Product = require("../../server/models/product");
const categorySection = require("../../server/models/categorySection");
const sectionItem = require("../../server/models/sectionItem");

const applianceController = {
    async GetAppliances(req,res,next){
      let categories;
      try{
        if(req.query.limit !== 'all'){
          categories = await Category.find({}).limit(req.query.limit);
        }else{
          categories = await Category.find({}).sort({ index: 1 });;
        }
        return res.status(200).json({status:200,categories:categories});
      }catch(error){
        return next(error)
      }      
    },
    async GetNavbarAppliances(req,res,next){
      try{
        const  categories = await Category.find({inMenu:true});
        return res.status(200).json({status:200,categories:categories});
      }catch(error){
        return next(error)
      }      
    },
    async GetApplianceSections(req,res,next){
      const {slug} = req.body;
      const category = await Category.findOne({slug:slug})
      
      categorySection.find({ categorySlug: slug })
      .sort({ index: 1 })
      .populate('sectionItemsId')
      .exec()
      .then(categorySections => {
        // categorySections will contain an array of CategorySection documents
        categorySections.forEach(section => {
          section.sectionItemsId.sort((a, b) => a.index - b.index);
        });
        return res.status(200).json({status:200,categorySections:categorySections,categoryDescription:category.description,categoryTitle:category.title});
      })
      .catch(err => {
        return res.status(500).json({status:500,massage:"Internal Server Error!"});
      });

    },
    async GetApplianceBySlug(req,res,next){
      const {slug} = req.body;
      try{
        const product = await Product.findOne({slug:slug});
        return res.status(200).json({status:200,product:product});
      }catch(error){
        return next(error)
      }      
    },
    async GetApplianceBySectionType(req,res,next){
      console.log(req.body)
      let query = {};
      query.category = req.body.category
      // Get the keys of the object as an array
      const keys = Object.keys(req.body);
      const name = keys[1];
      switch(name){
        case 'rating':
         query.rating = parseInt(req.body[name]);
        break;
        case 'features':
         query.feature = req.body[name];
        break;
        case 'types':
         query.type = req.body[name];
        break;
        case 'finishes-and-colors':
         query.color = req.body[name];
        break;
        case 'brands':
         query.brand = req.body[name];
        break;
        case 'fuel-types':
         query.fuelType = req.body[name];
        break;
      }

      console.log(query)

      try{
        const products = await Product.find(query);
        return res.status(200).json({status:200,products:products});
        
      }catch(error){
        return next(error)
      }      
           
    },

    async GetAppliancesFilters(req,res,next){
      let categoryFilters;
      let ratingFilters;
      try {
      categoryFilters = await Category.aggregate([
          {
            $lookup: {
              from: 'products', // The name of the "products" collection (automatically pluralized)
              localField: 'slug',
              foreignField: 'category',
              as: 'products'
            }
          },
          {
            $project: {
              title: 1,
              slug: 1,
              productCount: { $size: '$products' }
            }
          }
        ]);
  
          ratingFilters = await Product.aggregate([
            {
              $match: {
                rating: { $in: [3, 4, 5] } // Match products with rating 3, 4, or 5
              }
            },
            {
              $group: {
                _id: '$rating', // Group by the 'rating' field
                count: { $sum: 1 } // Count the number of products in each group
              }
            }
          ]);
       return res.status(200).json({status:200,categoryFilters:categoryFilters,ratingFilters:ratingFilters});

      }catch(error){
        return next(error)
      }

    },

    async SearchAppliance(req,res,next){
      return res.status(200).json({status:200,appliances:req.body.query});
    },

}

module.exports = applianceController