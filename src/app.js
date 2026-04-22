const express = require("express");
const app =  express();
//const { adminAuth , userAuth } = require("./middlewares/auth");
app.use("/",(err,req,res,next)=> {
    if(err){
        res.status(500).send("Something Went Error!!!");
    }
});
app.get("/getUserData",(req,res)=>{
    try{
        throw new Error("fhgvhgfkgj");
        res.send("User Data Sent");
    }
    catch(err){
        res.status(500).send("Some Error Contact Support Team");
    }
});

app.use("/",(err,req,res,next)=> {
    if(err){
        res.status(500).send("Some Error Contact Support Team");
    }
});

app.listen(3000 , ()=> {
    console.log("Server is successfully listening on port 3000");
});
 