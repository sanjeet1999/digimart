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

const getOrder = async (req, res) => {
    const { orderId } = req.params;
    logger.info(`Attempting to get order with ID: ${orderId}`);
    try {
        const order = await Order.findById(orderId);
        if (!order) {
            logger.warn(`Order with ID: ${orderId} not found`);
            return res.status(404).json({ success: false, message: "Order not found" });
        }
        logger.info(`Successfully retrieved order with ID: ${orderId}`);
        logger.debug({ order });
        res.status(200).json({ success: true, order });
    } catch (error) {
        logger.error(`Error getting order with ID: ${orderId}`, { error: error.message });
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const deleteOrder = async (req, res) => {
    const { orderId } = req.params;
    logger.info(`Attempting to delete order with ID: ${orderId}`);
    try {
        const deletedOrder = await Order.findByIdAndDelete(orderId);
        if (!deletedOrder) {
            logger.warn(`Order with ID: ${orderId} not found for deletion`);
            return res.status(404).json({ success: false, message: "Order not found" });
        }
        logger.info(`Successfully deleted order with ID: ${orderId}`);
        res.status(200).json({ success: true, message: "Order deleted successfully" });
    } catch (error) {
        logger.error(`Error deleting order with ID: ${orderId}`, { error: error.message });
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const updateOrder = async (req, res) => {
    const { orderId } = req.params;
    const updateData = req.body;
    logger.info(`Attempting to update order with ID: ${orderId}`);
    logger.debug({ updateData });

    try {
        const updatedOrder = await Order.findByIdAndUpdate(orderId, updateData, { new: true, runValidators: true });

        if (!updatedOrder) {
            logger.warn(`Order with ID: ${orderId} not found for update`);
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        logger.info(`Successfully updated order with ID: ${orderId}`);
        logger.debug({ updatedOrder });
        res.status(200).json({ success: true, order: updatedOrder });
    } catch (error) {
        logger.error(`Error updating order with ID: ${orderId}`, { error: error.message });
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export { createOrder, getOrder, deleteOrder, updateOrder };