import Product from "../models/product.model.js";
import User from "../models/user.model.js";
import logger from "../utils/logger.js";

const addProduct = async (req,res)=>{
    const {prodName,ProdDiscription,ProdQuantity,ProdImage,price,sellerId,Prodcategory} = req.body
    logger.info("Product data received");
    logger.debug(req.body);
    // check if user is from user and his role is seller 
    const userData = await User.findOne({_id:sellerId})
    if(!userData){
        logger.error("User not found");
        logger.debug(userData);
        return res.status(404).json({success:false,message:"User not found"});
    }
    if(userData.UserRole=="Seller"){
        logger.info("User is a seller");
        logger.debug(userData);
        const sellerId = userData._id
        const product = await Product.create({prodName,ProdDiscription,ProdQuantity,ProdImage,sellerId,price})
        logger.info("Product created successfully");
        logger.debug(product);
        res.send({"response":"200","Status":"Successfull","Data":product})
    }
    else{
        logger.error("User is not a seller");
        logger.debug(userData);
        logger.info("Product not created because user is not a seller");
        logger.debug(product);
        res.send({"response":"403","status":"Only Seller can Add Product"})

    }
}
    
const updateProduct = async (req,res) => {
    const {id} = req.params;
    const {prodName,ProdDiscription,ProdQuantity,ProdImage,price,Prodcategory} = req.body
    logger.info(`Product update request received for id: ${id}`);
    logger.debug(req.body);
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,{
            prodName,
            ProdDiscription,
            ProdQuantity,
            ProdImage,
            price,
            Prodcategory
        },{new:true})

        if(!updatedProduct){
            logger.error("Product not found for update");
            return res.status(404).json({success:false,message:"Product not found"});
        }
        logger.info("Product updated successfully");
        logger.debug(updatedProduct);
        res.status(200).json({success:true,message:"Product updated successfully",data:updatedProduct});

    } catch (error) {
        logger.error("Error updating product",error);
        res.status(500).json({success:false,message:"Internal server error"});
    }
}

export {addProduct, updateProduct}

