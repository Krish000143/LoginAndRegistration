const jwt=require("jsonwebtoken");

const jwtAuthMiddelware=(req,res,next)=>{
    try {
        if(!req.headers.authorization) return res.status(400).json("Token Must Required");
        const token=req.headers.authorization.split(" ")[1];
        console.log(token);

        if(!token) return res.status(400).json("Token Must Required");

        try {
            const decode=jwt.verify(token,process.env.SECRET_KEY);
            req.user=decode;
            next();
        } catch (e) {
            next(e)
        }
        
    } catch (e) {
        next(e);
    }
}


const generateToken=(userData)=>{
    return jwt.sign(userData,process.env.SECRET_KEY);
}

module.exports={generateToken,jwtAuthMiddelware};