const Joi = require("joi");
const Review = require('../../server/models/review')
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID
const YELP_API_KEY = process.env.YELP_API_KEY
const YELP_BUSINESS_ID = process.env.YELP_BUSINESS_ID
const axios = require('axios');

const reviewController = {

    async createReview(req, res, next) {
      // 1. validate user input
     const getCartSchema = Joi.object({
      author: Joi.string().required(),
      pageType: Joi.string().required(),
      content: Joi.string().required(),
      rating: Joi.string().required(),
    });
    const { error } = getCartSchema.validate(req.body);
   
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }


    const {pageType,author,content,rating} = req.body;

   try{
     
    const reviewToCreate = new Review({
      pageType,
     author,
     content,
     rating
    });
  
    await reviewToCreate.save()
    
    res.status(200).json({status: 200,msg:"Review Created Successfully!"});
  
   }catch(err){
    const error = {status:500,message:'Internal Server Error!'}
    return next(error)
   }

  },

  async updateReview(req, res, next) {
    // 1. validate user input
   const getCartSchema = Joi.object({
    id: Joi.string().required(),
    author: Joi.string().required(),
    pageType: Joi.string().required(),
    content: Joi.string().required(),
    rating: Joi.string().required(),
  });
  const { error } = getCartSchema.validate(req.body);
 
  // 2. if error in validation -> return error via middleware
  if (error) {
    return next(error)
  }


  const {id,pageType,author,content,rating} = req.body;

  const findReview = Review.findOne({_id:id});

  if(!findReview){
    return res.status(500).json({status: 500, message:'Review Not Found!'});
  }

  try { 
     await Review.findByIdAndUpdate(
      id,
      {pageType,author,content,rating},
      { new: true }
    );

    return res.status(200).json({status:200,msg:'Review Updated Successfully!'});

    } catch (error) {
      return res.status(500).json({status: 500, message:'Internal Server Error!'});
    }

},

async duplicateReview(req, res, next) {
  // 1. validate user input
 const getCartSchema = Joi.object({
  id: Joi.string().required()
});
const { error } = getCartSchema.validate(req.body);

// 2. if error in validation -> return error via middleware
if (error) {
  return next(error)
}


const {id} = req.body;

const findReview = await Review.findOne({_id:id});

if(!findReview){
  return res.status(500).json({status: 500, message:'Review Not Found!'});
}

try { 
   const dAuthor = findReview.author + '(duplicate)'
   const reviewToCreate = new Review({
     pageType:findReview.pageType,
     author:dAuthor,
     content:findReview.content,
     rating:findReview.rating
    });

  await reviewToCreate.save()

  return res.status(200).json({status:200,msg:'Review Duplicated Successfully!'});

  } catch (error) {
    return res.status(500).json({status: 500, message:'Internal Server Error!'});
  }

},

async deleteReview(req, res, next) {
  // 1. validate user input
 const getCartSchema = Joi.object({
  id: Joi.string().required()
});
const { error } = getCartSchema.validate(req.body);

// 2. if error in validation -> return error via middleware
if (error) {
  return next(error)
}


const {id} = req.body;

const findReview = Review.findOne({_id:id});

if(!findReview){
  return res.status(500).json({status: 500, message:'Review Not Found!'});
}

try { 
  await Review.findByIdAndDelete(id);
  return res.status(200).json({status:200,msg:'Review Deleted Successfully!'});
  } catch (error) {
    return res.status(500).json({status: 500, message:'Internal Server Error!'});
  }

},

  async getReviews(req, res, next) {

    try{
        let page = Number(req.query.page)
        let limit = Number(req.query.limit)
          
        let skip = (page - 1) * limit;
      
        let reviews;
        let totalCount;
        if(req.body.pageType !== 'all-categories'){
          reviews = await Review.find({pageType:req.body.pageType}).skip(skip).limit(limit);
          totalCount = await Review.countDocuments({pageType:req.body.pageType});
        }else{
          reviews = await Review.find({}).skip(skip).limit(limit);
          totalCount = await Review.countDocuments({});
        }
        return res.status(200).json({status:200,reviews:reviews,totalCount:totalCount});
    }catch(error){
        return next(error)
    }

 },
  async getUserReviews(req, res, next) {

    try{
      const reviews = await Review.find({pageType:req.body.pageType});
      const totalCount = await Review.countDocuments({pageType:req.body.pageType});
      return res.status(200).json({status:200,reviews:reviews,totalCount:totalCount});
    }catch(error){
        return next(error)
    }

 },

  async getGoogleReviews(req, res, next) {
    const placeId = GOOGLE_PLACE_ID;
    const apiKey = GOOGLE_API_KEY; // Replace with your Google API key
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`);
        return res.status(200).json({ reviews:response.data.result.reviews });
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching reviews' });
    }
  },
  
  async getYelpReviews(req, res, next) {
    const apiKey = YELP_API_KEY
      const businessId = YELP_BUSINESS_ID; // Replace with the actual business ID

        const response = await axios.get(
          `https://api.yelp.com/v3/businesses/${businessId}/reviews`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        // console.log(response.status)
        if (response.status === 200) {
          res.status(200).json({ reviews:response.data.reviews });
        } else {
          return res.status(500).json({ message: 'Error fetching reviews' });
        }

  }

}

module.exports = reviewController
