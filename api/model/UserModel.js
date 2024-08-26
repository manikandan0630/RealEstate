import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    avatar:{
        type:String,
        url:"https://tse2.mm.bing.net/th?id=OIP.QsTQiIXafX4lsEPvCmognAHaHS&pid=Api&P=0&h=180"
    },
    
},{timestamps:true})

const UserModel=mongoose.model("User",UserSchema)



export default UserModel;


