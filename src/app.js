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

connectDB()
    .then(() => {
        console.log("Database connection established...!!");
        app.listen(7777 , ()=> {
            console.log("Server is successfully listening on port 7777");
        });
    }).catch((err) => {
        console.error("Database cannot be connected!!",err);
    });


 