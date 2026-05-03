const express = require("express");
const authRouter = express.Router(); 
const { validateSignUpData } = require("../utils/validation");
const bcrypt = require("bcrypt");
const User = require("../models/user");

authRouter.post("/signUp", async (req,res) => {
    try{
    //Validation of data
    validateSignUpData(req);
    const {firstName,lastName,emailID,password} = req.body;
    //Encrypting the password
    const passwordHash = await bcrypt.hash(password,10); 
    //Creating a new instance user Model
    const user = new User({
        firstName,
        lastName,
        emailID,
        password: passwordHash,
    });
    
    await user.save();
    res.send("User Added Successfully!");
    } catch(err){
        res.status(400).send("ERROR : "+ err.message);
    }
   
});

authRouter.post("/login",async (req,res) => {
    try{
        const {emailID ,password} =req.body;
        const  user = await User.findOne({ emailID : emailID});
        if(!user){
            throw new Error("Invalid Credentials");
        }

        const isPasswordValid = await user.validatePassword(password);
        if(isPasswordValid){
            //Create JWT token
            const token = await user.getJWT();
            //Add the token to cookie and send the response back to the user
            res.cookie("token",token,{
                expires : new Date(Date.now() +8 *3600000),
            });
            res.send("Login Successfully!!!");
        } else {
            throw new Error ("Invalid Credentials");
        }

    }catch (err){
        res.status(400).send("ERROR : "+ err.message);
    }
})

module.exports = authRouter;