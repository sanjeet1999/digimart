import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
    buyerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: [true, 'Buyer Id is required']
    },
    orderItems:[{
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        },
        productPrice:{
            type:Number
        },
        productQuantity:{
            type:Number
        }
    }],
    totalPrice:{
        type:Number
    },
    status:{
        type:String,
        enum:['Pending','Rejected','Success'],
        default:'Pending'
    }},{timestamps:true}
)

const Order = mongoose.model("Order",OrderSchema);
export default Order
// const OrderSchema = new mongoose.Schema({
//     OrderId:{
//         type:mongoose.Schema.Types.ObjectId
//     },f
//     UserId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     },
//     OrderItems:{

//     }

// })