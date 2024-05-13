const { generateToken } = require("../jwt");
const User=require("../model/model");

exports.postSignup=async(req,res,next)=>{
   try {
        const {username,email,password}=req.body;

        const isPresent=await User.findOne({email});
        if(isPresent)
        {
            throw new Error("User is already present");
        }else
        {

            const user=await User.insertMany({username,email,password});
            if(user)
            {
                const token=generateToken({id:user.id,email});
                
                res.status(200).json({message:"data inserted sucessfully",result:user,token:token,status:200});
            }
        }

         
   } catch (e) {

    const status=400;
    const message ="Something Went Wrong";
    const extraDetails=e.message;

    const error={status,message,extraDetails};

    next(error);
    
   }
};

exports.postLogin=async(req,res,next)=>{
try {
        const {email,password}=req.body;
        //console.log(email,password);
        // console.log(req.password);
        
        const user=await User.findOne({email});
        if(user)
        {
            if(user.password==password)
            {

                const token=generateToken({id:user.id,email:user.email});
                res.status(200).json({token});
                
            }
            else
            {
                throw new Error("Password not match");
            }

        }else
        {
            throw new Error("please Sign up First");

        }
} catch (e) {
    const status=400;
    const message ="Something Went Wrong";
    const extraDetails=e.message;

    const error={status,message,extraDetails};

    next(error);
}
};

exports.home=async(req,res,next)=>{
    res.status(200).json("home");

};