import Review from "../models/review.model.js";
import logger from "../utils/logger.js";
const reviewAdded = async (req,resp)=>{
    const {productId,BuyerId,Rating,comments} = req.body
    logger.info("Review data received");
    logger.debug(req.body);
    const verifyBuyerId = await User.findOne({_id: new ObjectId(BuyerId)});
    if(!verifyBuyerId){
        logger.error("Buyer not found");
        logger.debug(verifyBuyerId);
        return resp.status(404).json({success:false,message:"Buyer not found"});
    }
    const reviewResp = await Review.create({productId,BuyerId,comments,Rating})
    if(!reviewResp){
        logger.error("Review not created");
        logger.debug(reviewResp);
        return resp.status(404).json({success:false,message:"Review not created"});
    }
    logger.info("Review created successfully");
    logger.debug(reviewResp);
    resp.send({"data":"Review is added","resp":reviewResp})
} 

export default reviewAdded