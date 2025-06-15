import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
// import { redisClient } from '../config/redisClient.js';
import jwt from 'jsonwebtoken';

export const signup = async (req,res)=>{
    try{
        console.log("req.bodyyyy",req.body)
        const {UserName,UserRole,UserEmail,UserPassword} = req.body;

        const userExist = await User.findOne({UserEmail})
    
        if(userExist){
            return res.status(400).json({success:false,message:"User already exists"}); 
        }
        console.log("yhaa pr user",UserRole)
        console.log("yhaa pr user")
        console.log("yhaa pr UserName",UserName)
        console.log("yhaa pr UserPassword",UserPassword)
        // console.log("yhaa pr UserCartItem",UserCartItem)

        const user = await User.create({UserName,UserRole,UserEmail,UserPassword})
        console.log("Userrrrr",user)
        res.status(201).json({success:true,message:"User created successfully"});  
    }catch(error){
        console.log("yeee")
        res.status(500).json({success:false,message:error.message});
    }
};

export const login = async (req,res)=>{
    const loginData = req.body;
    if (!loginData['loginEMail']||!loginData['Password']){
        res.status(400).json({error:true,data:"Bad requrest Email and password is required"})
    }
    console.log("logindata",loginData)
    const userdata = await User.findOne({UserEmail:loginData['loginEMail']})
    console.log("userdata",userdata)
    
    if(!userdata){
        res.status(404).json({error:true,data:"User not found"})
    }
    const comparisonresult = await bcrypt.compare(loginData['Password'],userdata.UserPassword)
    if (!comparisonresult){
        return res.status(401).json({error:true,data:"Invalid credential"})
    }
    // console.log("comparisonresult",comparisonresult)
    res.send({error:false,data:userdata})
}

export const logout = async (req,res)=>{
    res.send("this is logout controller")   
}






