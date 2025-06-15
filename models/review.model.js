import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products"
    },
    BuyerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    Rating:{
        type:Number,
        enum:[1,2,3,4,5],
        default:1
    },
    comments:{
        type:"String",
        maxlength:[100,"Only 100 words comments are allowed"]
    }},{
        timestamps:true
    }
);


const Review = mongoose.model("Review",ReviewSchema)
export default Review