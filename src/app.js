const express = require("express");
const app =  express();

app.get("/user",(req,res) => {
    res.send({FirstName : "Mehak", LastName : "Bansal"});
});
app.post("/user",(req,res)=> {
    res.send("Data Successfully saved to the Database!");
});
app.delete("/user",(req,res) =>{
    res.send("Deleted Successfully!!");
})
app.use("/test",(req,res) => {
    res.send("Hello from the server");
});



app.listen(3000 , ()=> {
    console.log("Server is successfully listening on port 3000");
});
