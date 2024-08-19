import UserModel from "../model/UserModel.js";
import bcryptjs from "bcryptjs";
export const signup=async(req,res)=>{
    const {username,email,password}=req.body;
    const HashedPassword=bcryptjs.hashSync(password,10);
    try{
        const newUser=await UserModel.create({username,email,password:HashedPassword});
    
        res.json({
            Message:"User Created Successfully"
        })
    }catch(Error){
        res.json({
            Message:Error.message
        })
    }
   
}