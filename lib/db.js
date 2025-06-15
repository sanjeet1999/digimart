import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path:"../../.env"});

export const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongo db is connected successfully`)
    }catch(error){
        console.log(`Error while connecting to mongodb ${error.message}`);
        process.exit(1);
    }

}