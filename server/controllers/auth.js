const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//registration
exports.userRegistration = async (req,res) => {
    try {
        const {name,email,phone,password,image,role} = req.body;
        const hashedPassword =await bcrypt.hash(password,10);
        const savedUser = await User.create({
            name,
            email,
            phone,
            password:hashedPassword,
            image,
            role
        })

        res.json({
            success:true,
            message:"User registered successfuly",
            savedUser
        })
  
        
    } catch (error) {
        res.json({
            success:false,
            message:"error while registration"
        })
        console.log(error);
        
        
    }
}

//login
exports.loginUser = async (req,res)=> {
    try {
        const {email,password} = req.body;
        const checkUser = User.find({email});
        if(!checkUser) {
            console.log("user not found");
            
        }
        const matchPassword = bcrypt.compare(password , checkUser.password);
        if(!matchPassword){
            console.log("password does not matched");
            
        }

        const payload = {
         id : checkUser._id


        }
        const token = jwt.sign(payload,process.env.JWT_SECRET , {expiresIn : '1h'})
        res.json({
            success:true,
            message:"logged In",
            token
        })

    } catch (error) {
        console.log(error);
        
        
    }
}