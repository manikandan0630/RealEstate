import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>console.log("Success")).catch((e)=>{
    console.log(e.message)
})

const app=express();

app.get("/",(req,res)=>{
    res.json(

       {
        Message:"Success"
       }
    )
})
app.listen(4000,()=>{
    console.log("Server is running")}
);