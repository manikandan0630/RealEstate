import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import AuthRouter from "./routes/auth.route.js";
import cors from "cors"



const app=express();
app.use(express.json())

//environment configure
dotenv.config();

//database connection
mongoose.connect(process.env.MONGO)
.then(()=>console.log("Success")).catch((e)=>{
    console.log(e.message)
})



//server start
app.listen(4000,()=>{
    console.log("Server is running")}
);

//routing for Signup API
app.use("/api/auth",AuthRouter);


app.use(cors({
    origin:"http://localhost:5173"
}))
app.use((err,req,res,next)=>{
    
   
    const statuscode=err.statuscode || 500;
    const message=err.message || 'Internal Server Error';
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message
    })
    
    

})