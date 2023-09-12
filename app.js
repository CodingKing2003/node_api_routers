import express from "express";
import mongoose from "mongoose";
import { User } from "./models/user.js";
import userRouter from './routes/user.js'
import { connectDB } from "./data/database.js";
import {config} from "dotenv";


export const app = express();

config({
  path:"./data/config.env"
});





//using middleware
app.use(express.json());
app.use("/users",userRouter)














app.get("/", (req, res) => {
  res.send("Nice Working");
});




