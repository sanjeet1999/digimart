import express from "express";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./lib/db.js";
import productRoute from "./routes/product.routes.js";
import createOrder from "./routes/order.routes.js";
import review from "./routes/review.routes.js";
import transections from "./routes/transection.routes.js";
import cors from 'cors';
import logger from "./utils/logger.js";
const app = express();
// console.log("dekjo",process.env.PORT)
const PORT = process.env.PORT;
app.use(express.json())

app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials: true, 
}));
logger.info("cors is connected for frontend");
logger.debug(`FRONTEND_URL:${process.env.FRONTEND_URL}`);


app.use("/api/auth",authRoutes)
app.use("/api/product",productRoute)
app.use("/api/order",createOrder) 
app.use("/api/review",review)
app.use("/api/transections",transections)

app.listen(PORT, async ()=>{
    try {
        await connectDB();
        logger.info("Server is running at http://localhost:"+PORT);
    } catch (error) {
        logger.error({ err: error }, "Failed to connect to the database. Application shutting down.");
        process.exit(1);
    }
})

