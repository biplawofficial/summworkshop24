const bcrypt=require('bcryptjs')
// const jwt=require('jsonwebtoken')
// const jwtSecretKet="qwertyuiopasdfghjklzxcvbnm"
const userModel=require('../models/user')

register=async(req,res,next)=>{
    const salt=await bcrypt.genSalt(10);
        const secPassword=await bcrypt.hash(req.body.password,salt);
        const data=new userModel(
            {
                name:req.body.name,
                email:req.body.email,
                password:secPassword,
                role:req.body.role

            }
        );
    
    try
{
        const savedData=await data.save();
        res.status(200).json(savedData);
}
catch(error)
{
    res.status(500).json({message:error.message});
}}

        
    module.exports={
        register
    }


    // login=asynu (req,res,next)=>
    //     {
    //         let email=req.body.email;
    //         let pwd=req.body.pasword;
    //         try{
    //             const data=await userMOdel.findOne({email});
    //         if(!data)
    //         {
    //             return res.status(400).json({message;"Please enter correct credentials"});
    //         }            }
    //     