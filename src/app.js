const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app =  express();

app.use(express.json());

app.post("/signUp", async (req,res) => {
    //Creating a new instance user Model
    const user = new User(req.body);
    try{
        await user.save();
        res.send("User Added Successfully!");
    } catch(err){
        res.status(400).send("Error Saving the user:"+ err.message);
    }
   
});
//get user by Email
app.get("/user",async (req,res) => {
    const userEmail = req.body.emailID;

    try{
        const user = await User.findOne({emailID : userEmail});
        if(!user){
            res.status(404).send("User not found");
        } else{
            res.send(user);
        }
        // const users = await User.find({emailID : userEmail});
        // if(users.length === 0){
        //     res.status(404).send("User not found");
        // }else{
        //     res.send(users);
        // }
    }catch (err){
        res.status(400).res("Something Went Wrong");
    }
});

app.delete("/user", async(req,res) => {
    const userId = req.body.userId ;
    try {
        const user = await User.findByIdAndDelete(userId);
        res.send("User deleted Succesfully");

    } catch(err) {
        res.status(400).res("Something Went Wrong");
    }
})
//Feed API - Get/feed get all the users from the database
app.get("/feed",async (req,res) => {
    try{
        const users = await User.find({});
        res.send(users)
    } catch (err){
        res.status(400).res("Something Went Wrong");
    }
});

app.patch("/user",async (req,res) => {
    const userId = req.body.userId;
    const data = req.body;
    try {
        await User.findByIdAndUpdate({_id : userId},data,{runValidators:true,});
        res.send("USer Updated Successfully");
    } catch (err){
        res.status(400).send("UPDATE FAILED :"+err.message);
    }
});

connectDB()
    .then(() => {
        console.log("Database connection established...!!");
        app.listen(7777 , ()=> {
            console.log("Server is successfully listening on port 7777");
        });
    }).catch((err) => {
        console.error("Database cannot be connected!!",err);
    });


 