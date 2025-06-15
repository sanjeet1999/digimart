import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    prodName:{
        type:String        
    },
    ProdDiscription:{
        type:String
    },
    ProdQuantity:{
        type:Number
    },
    ProdImage:[
    ],
    price:{
        type:"double",
        enum:['Dollar','INR'],
        default:'INR'
        

    },
    sellerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: [true, 'Seller Id is required']

    },
    Prodcategory:{
        enum:["software","ebook","music","online courses","digital art"]
    }},{timestamps:true}
)

const Product = mongoose.model("Product",ProductSchema)
export default Product