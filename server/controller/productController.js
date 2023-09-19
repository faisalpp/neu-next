const Category = require("../../server/models/category");
const categorySection = require("../../server/models/categorySection");
const Product = require("../../server/models/product");
const Joi = require("joi");
const AWSService = require('../../server/services/S3Upload')

const productController = {
    async CreateProduct(req,res,next){
      const productSchema = Joi.object({
          productType: Joi.string().required(),
          title: Joi.string().required(),
          slug: Joi.string().required(),
          category: Joi.string().required(),
          feature: Joi.allow(null).empty(''),
          type: Joi.allow(null).empty(''),
          color: Joi.allow(null).empty(''),
          brand: Joi.allow(null).empty(''),
          fuelType: Joi.allow(null).empty(''),
          regPrice: Joi.string().required(),
          salePrice: Joi.allow(null).empty(''),
          lowPrice: Joi.string().required(),
          highPrice: Joi.string().required(),
          rating: Joi.string().required(),
          stock: Joi.string().required(),
          modelNo: Joi.string().required(),
          itemId: Joi.string().required(),
          keyFeatures:Joi.array().required().min(0),
          featureVideo: Joi.any().required(),
          threeSixty: Joi.any().required(),
          media: Joi.array().required(),
          tags: Joi.string().required(),
          description: Joi.string().required(),
          specification: Joi.string().required(),
          deliveryInfo: Joi.string().required(),
          metaTitle: Joi.string().allow(null),
          metaDescription: Joi.string().allow(null),
          metaKeywords: Joi.any().allow(null),
      });
      const { error } = productSchema.validate(req.body);
      
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }
      
      // 3. if email or username is already registered -> return an error
      const { productType, title, slug, category, feature, type, color, brand, fuelType, regPrice, salePrice, lowPrice, highPrice, rating, stock, modelNo , itemId, keyFeatures, featureVideo, threeSixty, media, tag, description, specification, deliveryInfo, metaTitle, metaDescription, metaKeywords,
       } = req.body;
      
      const titleInUse = await Product.exists({ title });        
      if (titleInUse) {
        const error = {
          status: 409, message:'Product Already Exist!'
        }
        return next(error)
      }

      const files = req.files;

      // for(let j;j<keyFeatures.length;j++){
            console.log(keyFeatures)
          // }

      const KeyFeaturesImagesKey = Object.keys(files).filter((key) => key.startsWith('keyFeatures_image'));
      for(let i=0;i<KeyFeaturesImagesKey.length;i++){
          const inputString = KeyFeaturesImagesKey[i];
          const [field, type, index] = inputString.split('_');
          // const {response,updateImg} = await AWSService.uploadFile({name:req.files.KeyFeaturesImagesKey[i].name,data:req.files.KeyFeaturesImagesKey[i].data},'products/')
          // if(response.$metadata.httpStatusCode === 200){
            
          // }
      }
      // console.log(files)

    },

    async GetProducts(req,res,next){
      
      try{
        const products = await Product.find({});
        
        // const productDto = new ProductDto(products)
        // let productsDTOs=[];
        // productDto.forEach((product) => {
        //   const productDTO = new ProductDto(product);
        //   productsDTOs.push(productDTO);
        // });
        // console.log(productsDTOs)

        return res.status(200).json({status:200,products:products});
      }catch(error){
        return next(error)
      }
    },


    async GetCategories(req,res,next){
      
      try{
        const categories = await Category.find({});
        return res.status(200).json({status:200,categories:categories});
      }catch(error){
        return next(error)
      }
    },
    
    async GetCategoryData(req,res,next) {
      const {categorySlug} = req.body;
      
      categorySection.find({ categorySlug: categorySlug,type:{$in:['types','features','finishes-&-colors','brands','fuel-types']} })
      .populate('sectionItemsId')
      .exec()
      .then(data => {
        const types = data.filter(item => item.type === 'types');
        const features = data.filter(item=>item.type === 'features');
        const colors = data.filter(item=>item.type === 'finishes-&-colors');
        const brands = data.filter(item=>item.type === 'brands');
        const fuelTypes = data.filter(item=>item.type === 'fuel-types');
        return res.status(200).json({status:200,types,features,colors,brands,fuelTypes});
      })
      .catch(err => {
          return res.status(500).json({message:'Internal Server Error!'});
      });
    },

    async GetParentModelNumbers(req,res,next){
          // 1. validate user input
    const productSchema = Joi.object({
      category:  Joi.string().required(),
     });
     const { error } = productSchema.validate(req.body);
     
     // 2. if error in validation -> return error via middleware
     if (error) {
       return next(error)
     }
      try{
        const modelNos = await Product.find({ category: req.body.category }).distinct("modelNo");
        return res.status(200).json({status:200,modelNos});
      }catch(error){
        return res.status(500).json({message:'Internal Server Error!'});
      }
    }

}

module.exports = productController;