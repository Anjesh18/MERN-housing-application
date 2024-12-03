import express from "express";
import mongoose from "mongoose";
import userRoute from './routes/userRouter.js'
import houseRoute from './routes/houseRouter.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
const app=express()


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())


app.use('/api/users', userRoute)
app.use('/api/houses', houseRoute)
mongoose.connect('mongodb://127.0.0.1:27017/house').then(()=>console.log("database connected"))

app.listen(9000, ()=>console.log("app running on port 9000"))