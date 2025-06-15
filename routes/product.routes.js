import express from "express";
import addProduct from "../controllers/product.controller.js";

const productRoute = express.Router();

productRoute.post("/addProduct",addProduct)

export default productRoute;