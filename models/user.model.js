import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
        trim:true
    },
    UserRole:{
        type:String,
        enum:["Buyer","Seller"],
        default:"Seller"
    },
    UserEmail:{
        type:String,
        lowercase:true,
        unique:true,
        required:true
    },
    UserPassword:{
        type:String,
        required:true,
        minlength:[6,"password must be 6 charaters"],
    }
    },{timestamps:true}   
 );

userSchema.pre("save",async function(next){
    if(!this.isModified("UserPassword"))return next();
    try{
        const salt = await bcrypt.genSalt(10);
        this.UserPassword = await bcrypt.hash(this.UserPassword,salt);
        next()
    }catch(error){
       next(error)
    }
})

userSchema.methods.comparePassword = async function (password){
    return bcrypt.compare(password,this.UserPassword)
}
 
const User = mongoose.model("User",userSchema)
export default User;