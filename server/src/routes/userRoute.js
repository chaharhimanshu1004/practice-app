const express = require('express');
import { UserModel } from '../model/User';
const router = express.Router();

// at starting -- register yourself

router.post("/register",(req,res)=>{
    const {username,password} = req.body;
    // find user in the database
    const user = await UserModel.findOne({username});
    if(user){
        return res.send("Username already exist,change the username");
    }
    // hash the password

    const hashedPass = await bcrypt.hash(password,10);
    const newUser = new UserModel({username,password:hashedPass});
    await newUser.save();
    res.json({message: "New user registered successfully"});



    


})
