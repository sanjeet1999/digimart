import mongoose, { mongo } from "mongoose";

const transectionSchema = new mongoose.Schema({
    orderId:{
        type:mongoose.Schema.ObjectId,
        ref:"orders"
    },
    payMethod:{
        type:"String",
        enum:['Paypal','UPI'],
        default:'Paypal'
    },
    status:{
        type:"String",
        enum:['Pending','Failed','Success'],
        default:'Pending'
    }},{
        timestamps:true
    });


const transection = mongoose.model("transection",transectionSchema)
export default transection
