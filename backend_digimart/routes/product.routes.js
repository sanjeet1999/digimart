import express from "express";
import { addProduct, updateProduct } from "../controllers/product.controller.js";

const productRoute = express.Router();

productRoute.post("/addProduct",addProduct)
productRoute.put("/updateProduct/:id",updateProduct)



export default productRoute; 
