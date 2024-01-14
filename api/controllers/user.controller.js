import { errorHandler } from "../utils/error.js"
import bcrypt from 'bcryptjs';
import User from "../models/user.model.js";


export const test=(req,res)=>{
    res.json({message:"Hello World"})
}

export const updateUser=async(req,res,next)=>{
    if(req.user.id!=req.params.id) return next(errorHandler(403,'You can only update you own account'))
    try{
        if(req.body.password){
            req.body.password=bcrypt.hashSync(req.body.password, 10);
        }
        const updateUser= await User.findByIdAndUpdate(req.params.id, {
            $set:{
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                avatar:req.body.avatar,
            }
        },
        {new:true}
        );
        const {password, ...userInfo}=updateUser._doc;
        res.status(200).json(userInfo);
    }
    catch(error){
        next(error)
    }
}

export const deleteUser=async(req,res,next)=>{
    if(req.user.id!=req.params.id) return next(errorHandler(403,'You can only delete your onwn account'))
    try {
        await User.findByIdAndDelete(req.params.id);
        res.clearCookie('access_token');   
        res.status(200).json({message:'User has been deleted...'})
    } catch (error) {
        next(error)
    }
}