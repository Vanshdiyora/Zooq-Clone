const {UserModel}=require("../models")
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")
module.exports={
    registerUser:async (req,res)=>{
        const registerModel=new UserModel(req.body)
        registerModel.password=await bcrypt.hash(req.body.password,10);
        try{
            const response=await registerModel.save()
            response.password=undefined;
            return res.status(201).json({message:'success',data:response})
        }catch(err){
            return res.status(500).json({message:"err",err})
        }
    },
    loginUser:async (req,res)=>{
        try{
            const user=await UserModel.findOne({email:req.body.email});
            if(!user){
                return res.status(401).json({message:"Auth Failed, Invalid username/password"});
            }

            const isPassEqual=await bcrypt.compare(req.body.password,user.password)
            if(!isPassEqual){
                return res.status(401).json({message:"Auth Failed, Invalid username/password"})
            }

            const tokenObject={
                _id:user._id,
                firstName:user.firstName,
                email:user.email
            }

            const jwtToken=jwt.sign(tokenObject,process.env.SECRET,{expiresIn:'1d'});
            return res.status(200).json({jwtToken,tokenObject})
        }catch(err){
            return res.status(500).json({message:"error",err})
        }
    }
    
}