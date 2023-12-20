const express = require('express');
const UserModel = require('../model/User')
const router = express.Router();
const bcrypt  = require('bcrypt')
const jwt = require('jsonwebtoken')

// at starting -- register yourself

router.post("/register",async (req,res)=>{
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
});

router.post("/login",async(req,res)=>{
    const {username,password} = req.body;
    const user = await UserModel.findOne({username});
    if(!user){
        return res.send("username doesnt exist");
    }
    const isValidPassword = await bcrypt.compare(password,user.password); 
    if(!isValidPassword){
        return res.json({message:"Password doesn't match"})
    }
    const token = jwt.sign({id:user._id},"secret");
    res.json({token,userID:user._id});

})
module.exports = router;
