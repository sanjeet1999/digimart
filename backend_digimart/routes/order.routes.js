import express from "express";
import { createOrder, getOrder, deleteOrder, updateOrder } from "../controllers/order.controller.js";
const orderRoute = express.Router();

orderRoute.post("/create", createOrder);
orderRoute.get("/get/:orderId", getOrder);
orderRoute.delete("/delete/:orderId", deleteOrder);
orderRoute.put("/update/:orderId", updateOrder);

export default orderRoute; 