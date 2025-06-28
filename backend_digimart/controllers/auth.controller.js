import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
// import { redisClient } from '../config/redisClient.js';
import jwt from 'jsonwebtoken';
import logger from "../utils/logger.js";
import generateToken from "../utils/jwt.utils.js";

export const signup = async (req,res)=>{
    try{
        const { UserPassword, ...userInfo } = req.body;
        logger.info("Signup request received");
        logger.debug({ user: userInfo }); 

        const {UserName,UserRole,UserEmail} = req.body;

        const userExist = await User.findOne({UserEmail})
    
        if(userExist){
            logger.error("User already exists");
            return res.status(400).json({success:false,message:"User already exists"}); 
        }
        logger.info("Creating user");
        try{
            const user = await User.create({UserName,UserRole,UserEmail,UserPassword: req.body.UserPassword})
            logger.info("User created successfully");
            logger.debug({ user: user });
        }catch(error){
            logger.error({ err: error }, "Error during user creation");
            return res.status(500).json({success:false,message:error.message});
        }
        res.status(201).json({success:true,message:"User created successfully"});  
    }catch(error){
        logger.error({ err: error }, "Error during signup");
        res.status(500).json({success:false,message:error.message});
    }
};

export const login = async (req,res)=>{
    try {
        const { loginEMail, Password } = req.body;

        if (!loginEMail || !Password){
            logger.error("Email and password are required");
            return res.status(400).json({success: false, message:"Email and password are required"});
        }

        logger.info("Login request received for user: " + loginEMail);

        const user = await User.findOne({ UserEmail: loginEMail });
        
        if(!user){
            logger.error("User not found: " + loginEMail);
            return res.status(404).json({success: false, message:"User not found"});
        }

        const isMatch = await bcrypt.compare(Password, user.UserPassword);
        
        if(!isMatch){
            logger.error("Invalid credentials for user: " + loginEMail);
            return res.status(401).json({success: false, message:"Invalid credentials"});
        }

        const payload = {
            id: user._id,
            email: user.UserEmail,
            role: user.UserRole
        };

        const token = generateToken(payload);
        
        user.UserPassword = undefined;

        logger.info("User logged in successfully: " + loginEMail);
        
        return res.status(200).json({
            success: true, 
            message:"User logged in successfully", 
            data: {
                user,
                token
            }
        });
    } catch (error) {
        logger.error({ err: error }, "Error during login");
        res.status(500).json({success: false, message: "An internal server error occurred"});
    }
}

export const logout = async (req,res)=>{
    try {
        logger.info("Logout request received");
        logger.debug({ user: req.user });
        // In a real app, you would invalidate a session or JWT here.
        res.status(200).json({success: true, message: "User logged out successfully"});
    } catch (error) {
        logger.error({ err: error }, "Error during logout");
        res.status(500).json({success: false, message: "An internal server error occurred"});
    }
}






