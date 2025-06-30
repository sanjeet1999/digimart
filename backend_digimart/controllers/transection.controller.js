import transection from "../models/transection.model.js";
import logger from "../utils/logger.js";

const transectionAdd = async (req,resp)=>{
    const {orderId,payMethod,status} = req.body
    logger.info("Transection data received");
    logger.debug(req.body);
    const transectionresp = await transection.create({orderId,payMethod,status})
    if(!transectionresp){
        logger.error("Transection not created");
        logger.debug(transectionresp);
        return resp.status(404).json({success:false,message:"Transection not created"});
    }
    logger.info("Transection created successfully");
    logger.debug(transectionresp);
    resp.send({"data":transectionresp._id})
} 

export default transectionAdd