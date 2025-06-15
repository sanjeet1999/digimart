import Product from "../models/product.model.js";
import User from "../models/user.model.js";

const addProduct = async (req,res)=>{
    const {prodName,ProdDiscription,ProdQuantity,ProdImage,price,sellerId,Prodcategory} = req.body
    console.log("yhaa dataa aya",prodName)
    console.log("yhaa dataa aya",ProdDiscription)
    console.log("yhaa dataa aya ProdQuantity ",ProdQuantity)
    console.log("yhaa dataa aya ProdImage ",ProdImage)
    console.log("yhaa dataa aya price ",price)
    console.log("yhaa dataa aya sellerId",sellerId)
    console.log("yhaa dataa aya Prodcategory",Prodcategory)
    // check if user is from user and his role is seller
    const userData = await User.findOne({_id:sellerId})
    console.log("Userdata",userData._id)
    console.log("Userdataall",userData)
    if(userData.UserRole=="Seller"){
        const sellerId = userData._id
        const product = await Product.create({prodName,ProdDiscription,ProdQuantity,ProdImage,sellerId,price})
        res.send({"response":"200","Status":"Successfull","Data":product})
    }
    else{
        res.send({"response":"403","status":"Only Seller can Add Product"})

    }
}
    


export default addProduct
