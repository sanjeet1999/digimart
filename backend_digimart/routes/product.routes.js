import express from "express";
import { addProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const productRoute = express.Router();

productRoute.post("/addProduct",addProduct)
productRoute.put("/updateProduct/:id",updateProduct)
productRoute.delete("/deleteProduct/:id",deleteProduct)




export default productRoute; 
