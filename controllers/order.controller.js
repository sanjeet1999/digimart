import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import { ObjectId } from 'mongodb';

const createOrder = async(req,resp)=>{
    const {buyerId,orderItems,totalPrice,status} = req.body;
    const verifybuyerId = await User.findOne({_id: new ObjectId(buyerId)});
    console.log("verifybuyerId",verifybuyerId)
    if (verifybuyerId['UserRole']=="Buyer"){
        const orderCreated = await Order.create({buyerId,orderItems,status,totalPrice})
        resp.send({"Status":200,"Resp":"Order Created Successfully"})

    }
    else{
        resp.send({"status":405,"Resp":"Only Buyer can buy"})
    }
}
export default createOrder