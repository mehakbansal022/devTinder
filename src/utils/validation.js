const validator = require("validator");

const validateSignUpData = (req) =>{
    const { firstName , lastName , emailID , password } = req.body;
    if(!firstName || !lastName){
        throw new Error ("Name is not valid!");
    } else if(!validator.isEmail(emailID)) {
        throw new Error("Email is not valid !!");
    } else if(!validator.isStrongPassword(password)){
        throw new Error("Enter a strong password!!");
    }
};

const validateEditProfileData = (req) => {
    const allowedEditFields = [
        "firstName", 
        "lastName" ,
        "emailID" ,
        "age",
        "gender",
        "photoUrl",
        "about",
        "skills"
    ];
    const isEditAllowed = Object.keys(req.body).every((fields)=>allowedEditFields.includes(fields));

    return isEditAllowed;
};

module.exports = {
    validateSignUpData,
    validateEditProfileData,
};