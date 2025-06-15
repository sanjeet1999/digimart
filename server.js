import express from "express";
import dotenv from  "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./lib/db.js";
import productRoute from "./routes/product.routes.js";
import createOrder from "./routes/order.routes.js";
import review from "./routes/review.routes.js";
import transections from "./routes/transection.routes.js";
import cors from 'cors';


const app = express();
dotenv.config({path:".env"});
console.log("port number",process.env.PORT)
const PORT = process.env.PORT;
app.use(express.json())

app.use(cors({
  origin: process.env.origin || "http://localhost:5173",
  credentials: true,
}));
// app.use(cors());

app.use("/api/auth",authRoutes)
app.use("/api/product",productRoute)
app.use("/api/order",createOrder)
app.use("/api/review",review)
app.use("/api/transections",transections)


app.listen(PORT,()=>{
    console.log("Server is running at http://localhost:"+PORT);
    connectDB();
})