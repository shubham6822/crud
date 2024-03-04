import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import route from "./routes/user.route.js";

const app = express();

app.use(bodyParser());
app.use(cors());
dotenv.config();


mongoose.connect(process.env.MANGO).then(() => {
    console.log("database  connected")
    app.listen(5000, () => {
        console.log('server is running on port 5000');
    })
}).catch(err => console.log(err));

app.use("/api", route);
