import mongoose from "mongoose";
import logger from "../utils/logger.js";

export const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI) 
        logger.info(`mongo db is connected successfully`)
    }catch(error){
        throw error
    }

}