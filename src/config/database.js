const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect
    ("mongodb+srv://Namaste_Node:YpG8MMzFMaAgVoDg@namastenode-1.k4w5mq4.mongodb.net/");
};

connectDB().then(() => {
    console.log("Database connection established...!!");
}).catch((err) => {
    console.log("Database cannot be connected!!");
});


