const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minLength : 4,
    },
    lastName :{
        type :String
    },
    emailID :{
        type : String,
        lowercase : true,
        required : true,
        unique: true,
        trim : true,
    },
    password :{
        type : String,
        required : true,
    },
    age :{
        type :Number,
        min :18,
    },
    gender:{
        type : String,
        validate(value){
        if(!["male","female","others"].includes(value)){
            throw new Error("Gender data is not valid");
            }
        },
    },
    photoUrl:{
        type : String,
        default : "https://www.shutterstock.com/image-vector/isolated-object-avatar-dummy-symbol-260nw-1290296656.jpg",
    },
    about:{
        type : String
    },
    skills:{
        type : [String],
    },
},{
    timestamps : true,
});

module.exports  = mongoose.model("User",userSchema); 