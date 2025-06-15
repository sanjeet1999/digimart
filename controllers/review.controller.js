import Review from "../models/review.model.js";

const reviewAdded = async (req,resp)=>{
    const {productId,BuyerId,Rating,comments} = req.body
    console.log("ProductId",productId)
    console.log("BuyerId",BuyerId)
    console.log("Rating",Rating)
    console.log("comments",comments)
    const reviewResp = await Review.create({productId,BuyerId,comments,Rating})
    resp.send({"data":"Review is added","resp":reviewResp})
}

export default reviewAdded