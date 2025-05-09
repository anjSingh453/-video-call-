import express from "express";
import {createServer} from "node:http";

 
import {connectToSocket} from "./controller/socketManger.js";
import mongoose from "mongoose";

import cors from "cors";

const app = express();
//here we are connet express or app to socket io
const server = createServer(app);
const io = connectToSocket(server);


app.set("port" , (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit : "40kb"}));
app.use(express.urlencoded({limit: "49kb" ,extended :true}));
 

import userRoute from "./routes/userRoute.js";
app.use("/api/v1/users" , userRoute);







const start = async()=>{
    const connectionDb = await mongoose.connect("mongodb+srv://anjali:VOWUngkmbVuy5m90@cluster0.paruqtl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")  
    console.log(`MONGO Connected BD Host : ${connectionDb.connection.host}`);
    server.listen(app.get("port") ,()=>{
        console.log("Listening on port 8000")
    });
}

start();
