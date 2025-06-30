import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import { ObjectId } from 'mongodb';
import logger from "../utils/logger.js";

const createOrder = async(req,resp)=>{
    const {buyerId,orderItems,totalPrice,status} = req.body;
    logger.info("Order data received");
    logger.debug(req.body);
    const verifybuyerId = await User.findOne({_id: new ObjectId(buyerId)});
    if(!verifybuyerId){
        logger.error("Buyer not found");
        logger.debug(verifybuyerId);
        return resp.status(404).json({success:false,message:"Buyer not found"});
    }
    logger.info("Buyer found");
    logger.debug(verifybuyerId);
    if (verifybuyerId['UserRole']=="Buyer"){
        logger.debug(verifybuyerId);
        const orderCreated = await Order.create({buyerId,orderItems,status,totalPrice}) 
        logger.info("Order created successfully");
        logger.debug(orderCreated);
        resp.send({"Status":200,"Resp":"Order Created Successfully"})


    }
    else{
        resp.send({"status":405,"Resp":"Only Buyer can buy"})
    }
}
export default createOrder