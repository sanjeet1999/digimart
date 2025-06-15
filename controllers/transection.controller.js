import transection from "../models/transection.model.js";

const transectionAdd = async (req,resp)=>{
    const {orderId,payMethod,status} = req.body
    console.log("OrderId",orderId)
    console.log("payMethod",payMethod)
    console.log("status",status)
    const transectionresp = await transection.create({orderId,payMethod,status})
    resp.send({"data":transectionresp._id})
}

export default transectionAdd