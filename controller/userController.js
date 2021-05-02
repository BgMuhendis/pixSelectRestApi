const User =require("../model/userModel");
const createError = require('http-errors');
const bcrypt=require("bcrypt");

const userRegister=async (req,res,next)=>{
    try {
        const addUser = new User(req.body);
        const {error,value}=addUser.joiValidation(req.body);

        if (error) {
            next(createError(400,error));
        }else{
            addUser.password=await bcrypt.hash(addUser.password,10);
            const result = await addUser.save();
            res.send(result);
        }
       
    } catch (err) {
        next(err);
    }
}
const userSignIn= async (req,res,next)=> {
    
    try {
     const user= await User.login(req.body.email,req.body.password);
     const token = await user.generateToken();
     res.json({
         user,
         token
     });
    } catch (error) {
        next(error);
    }

}

module.exports={
    userRegister,
    userSignIn
}