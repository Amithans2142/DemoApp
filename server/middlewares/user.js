const jwt = require('jsonwebtoken');
require('dotenv').config();

const user = async(req,res,next) => {
   const token = req.header('Authorization')?.replace("Bearer","").trim();;
   console.log({token});
   
   if(!token){
    console.log("please validate with correct token");
    
   }
   try {
    const data = jwt.verify(token,process.env.JWT_SECRET);
    req.user = data;
    next();
   } catch (error) {
    console.log(error);
    
    
   }
}
module.exports=user;
