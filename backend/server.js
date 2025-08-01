import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import { connect } from 'mongoose';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App config 

const app = express();

const port = process.env.PORT || 4000;
connectDB();

connectCloudinary();


// middlewares
app.use(express.json())
app.use(cors());

app.use('/api/user' , userRouter);

app.use('/api/product' , productRouter);

// api end points
app.get('/' , (req, res) => {
    res.send("API working")
})

app.listen(port , () => console.log("Server running on PORT : " + port));