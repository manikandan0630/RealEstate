import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

import AuthRouter from "./routes/auth.route.js";


dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>console.log("Success")).catch((e)=>{
    console.log(e.message)
})

const app=express();
app.use(express.json())

app.listen(4000,()=>{
    console.log("Server is running")}
);

app.use("/api/auth",AuthRouter);