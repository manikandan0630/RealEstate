import UserModel from "../model/UserModel.js";
import bcryptjs from "bcryptjs";
import ErrorHandle from "../utils/error.js";
import jwt from "jsonwebtoken";

//Signup function
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const HashedPassword = bcryptjs.hashSync(password, 10);
  try {
    const newUser = await UserModel.create({
      username,
      email,
      password: HashedPassword,
    });

    res.json({
      Message: "User Created Successfully",
    });
  } catch (Error) {
    next(Error);
  }
};



//Signin function
export const signin = async (req, res,next) => {
  const { email, password } = req.body;
  try {
    const validUser = await UserModel.findOne({ email });
    //check if the user exists or not
    if (!validUser) return next(ErrorHandle(404, "User not found"));
    //compare the user password using bcrypt comapre method
    const validPassword = bcryptjs.compare(password, validUser.password);
    //check the password is correct or not //correct means move to the next line code //otherwise if statement will works
    if (!validPassword) return next(ErrorHandle(401, "Invalid password"));
    //token generate
    const token = jwt.sign({ id: validUser.id }, process.env.JWT_SECRET);
    //object destructuring the pasword field
    const { password: pass, ...rest } = validUser._doc;
    console.log(password)
    res.cookie("token", token, { httpOnly: true }).status(200).json(rest);
  } catch (error) {
    next(error);
  }
};


//google auth

export const google=async(req,res,next)=>{
  try {
      const user=await UserModel.findOne({email:req.body.email})
      if(user){
        //token generate
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
        const {password:pass,...rest}=user._doc;
        res.cookie('token',token,{httpOnly:true})
        .status(200)
        .json(
          rest
        )
      }
      else{
        const generatepassword=Math.random(36).toString().slice(-8)+Math.random(36).toString().slice(-8);
        const HashedPassword=bcryptjs.hashSync(generatepassword,10);
        const newUser=await UserModel.create({username:req.body.name.split(" ").join("").toLowerCase()+Math.random(36).toString().slice(-4),email:req.body.email,password:HashedPassword,avatar:req.body.photo})
        newUser.save()
        const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET)
        const {password:pass,...rest}=newUser._doc;
        res.cookie("token",token,{httpOnly:true}).status(200).json(rest)
      }
  } catch (error) {
    next(error)
  }
}