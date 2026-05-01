const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const app =  express();
const { userAuth} = require("./middlewares/auth");

app.use(express.json());
app.use(cookieParser());

app.post("/signUp", async (req,res) => {
    try{
    //Validation of data
    validateSignUpData(req);
    const {firstName,lastName,emailID,password} = req.body;
    //Encrypting the password
    const passwordHash = await bcrypt.hash(password,10); 
    console.log(passwordHash);
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

app.post("/login",async (req,res) => {
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

app.get("/profile", userAuth ,async (req,res) =>{
    try{
        const user = req.user;
        res.send(user);
    }catch (err){
        res.status(400).send("ERROR : "+ err.message);
    }

})
//get user by Email
app.post("/sendConnectionRequest",userAuth , async(req,res) =>{
    const user = req.user; 
    console.log("Sending a connection Request");

    res.send(user.firstName + " sent the Connection Request");
})


connectDB()
    .then(() => {
        console.log("Database connection established...!!");
        app.listen(7777 , ()=> {
            console.log("Server is successfully listening on port 7777");
        });
    }).catch((err) => {
        console.error("Database cannot be connected!!",err);
    });


 