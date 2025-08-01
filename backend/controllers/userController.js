// create or login to website
// controller funciton 
import validator from 'validator';
import userModel from "../models/useModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) =>{
    return jwt.sign({id} , process.env.JWT_SECRET);
}

// Route for User login
const loginUser = async(req, res) => {
    try{
        const {email , password} = req.body;
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false , message : "user doesn't exists"});
        }

        const isMatch = await bcrypt.compare(password , user.password);// true or false

        if(isMatch){
            const token = createToken(user._id)
            res.json({success: true  , token})
        }
        else{
            // passwrod not match
            res.json({success : false , message : "Invalid credentials"});
        }
    }
    catch(error){
        console.log(error);
        res.json({success : false , message  : error.message});
    }
}

// Route for user Registration
const registerUser = async(req, res) => {
    try{
        const {name , email , password } = req.body;
        // checking user already exists or not 
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success : false , message : "user already exist"});
        }

        // validating email and strong password
        if(!validator.isEmail(email)){
            return res.json({success : false , message : "please enter valid email "});
        }

        if(password.length < 8){
            return res.json({success : false , message : "please enter strong password"});
        }
        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt);

        const newUser = new userModel({
            name ,
            email , 
            password : hashedPassword
        })
 
        const user = await newUser.save();
        const token = createToken(user._id);

        
        res.json({success : true , token })

    }
    catch(error){
        console.log(error);
        res.json({success : false , message : error.message});
    }
}

// Route for admin login 
const adminLogin = async(req, res) => {

}

export {loginUser , registerUser , adminLogin};