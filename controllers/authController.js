import userModel from '../models/userModel.js';
import {comparePassword, hashPassword} from '../helpers/authHelper.js';
import jwt from 'jsonwebtoken';

export const registerController = async (req,res) => {
    try{
        const {name, email, password, phone, address} = req.body
        // validation
        if(!name){
            return res.send({error:'name is required'})
        }
        if(!email){
            return res.send({error:'email is required'})
        }
        if(!password){
            return res.send({error:'password is required'})
        }
        if(!phone){
            return res.send({error:'phone is required'})
        }
        if(!address){
            return res.send({error:'address is required'})
        }

        // user check
        const existingUser = await userModel.findOne({email})


        // existing user
        if(existingUser){
            return res.status(200).send({
                success:true,
                message: 'Already register please login'
            })
        }

        //register user
        const hashedPassword = await hashPassword(password)

        //save
        const user = await new userModel({name, email, phone, address, password:hashedPassword}).save()

        res.status(201).send({
            success:true,
            message:'User Register Successfully',
            user,
        })
    }
    catch (error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in registration',
            error
        })
    }
};

// POST Login
export const loginController = async(req,res) => {
    try{
        const {email, password} = req.body
        // validation
        if(!email || !password){
            return res.status(404).send({
                success: false.value,
                message: 'Invalid email or password'
            })
        }
        //check password
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success: false,
                message: 'Email is not register'
            })
        }
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:'invalid password'
            })
        }
        // token
        const token = await jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.status(200).send({
            success:true,
            message:'login successfully',
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token,
        });
    }
    catch(error){
        console.log(500).send({
            success: false,
            message:'Error in login',
            error
        })
    }
}

export const testController = (req,res) => {
    res.send('protected route');
}