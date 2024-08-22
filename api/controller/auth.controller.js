import UserModel from "../model/UserModel.js";
import bcryptjs from "bcryptjs";
// import ErrorHandle from "../utils/error.js"

 const signup=async(req,res,next)=>{
    const {username,email,password}=req.body;
    const HashedPassword=bcryptjs.hashSync(password,10);
    try{
        const newUser=await UserModel.create({username,email,password:HashedPassword});
        
        res.json({
            Message:"User Created Successfully"
        })
    }catch(Error){
     next(Error)
    }
   
}

export default signup;