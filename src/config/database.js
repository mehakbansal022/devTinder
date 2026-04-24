const mongoose = require('mongoose');

const connectDB = async () => {
    return mongoose.connect
    ("mongodb+srv://Namaste_Node:YpG8MMzFMaAgVoDg@namastenode.2lj9vhu.mongodb.net/devTinder");
};

module.exports = connectDB;
