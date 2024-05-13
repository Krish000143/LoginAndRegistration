const mongoose=require("mongoose");
const validator=require("validator");
const userSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true,
        validate(value)
        {
            if(validator.isEmpty(value))
            {
                throw new Error("username must Require");
            }
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("please Enter Proper Email");
            }
        }
    },
    password:{
        type:String,
        required:true,
        unique:true,
        validate(value)
        {
            if(validator.isEmpty(value))
            {
                throw new Error("Password must Require");
            }
        }
    }
},{timestamps:true});

const User=mongoose.model("User",userSchema);

module.exports=User;