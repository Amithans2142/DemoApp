const User = require('../models/User')

//get users 
exports.getUsers=async(req,res)=>{
    try {
        const users =await User.find();
        res.json({
            success:true,
            message:"fetched",
            users
        })
        
    } catch (error) {
        console.log(error);
        
        
    }
}

//edit users 
exports.editUser = async (req,res) => {
    try {
        const userId = req.params.id;
        console.log({userId});
        
        const {name} = req.body;
        const checkUser = await User.findById({_id:userId});
        if(!checkUser){
            console.log("user not found");
            
        }
        const editedUser = await User.findByIdAndUpdate(userId,{name
        },{new:true})
        res.json({
            success:true,
            message:"updated",
            editedUser
        })

        
    } catch (error) {
        console.log(error);
        
        
    }
}

//delete user
exports.deleteUser = async (req,res) => {
    try {
        const userId = req.params.id;
        const checkUser = await User.findById({_id:userId});
        if(!checkUser) {
            console.log("user not found");
            
        }
        const deleteUser = await User.findByIdAndDelete(userId,{new:true})
        res.json({
            success:true,
            message:"user deleted"
        })
        
    } catch (error) {
        
    }
}