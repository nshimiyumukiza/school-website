import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 4000;
const db = process.env.DATABASE;

 const app = express()

 app.listen(port,()=>{
    console.log(`port running on ${port}`)
 })
 app.get((req,res), () =>{
    res.send("hello")
 })

 
 mongoose.connect(db)
 .then(()=>{
    console.log("data base connection succsesufly!")
 }).catch((error)=>{
    console.log(error)
 })
