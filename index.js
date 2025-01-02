// const express = require("express")
import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js"

dotenv.config({});
connectDb();
const PORT = 8080;
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173/",
  credentials: true,
};
app.use(cors(corsOptions));

//routes
// `http://localhost:8080/api/v1/user/register`
app.use('/api/v1/user',userRoute)


app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
