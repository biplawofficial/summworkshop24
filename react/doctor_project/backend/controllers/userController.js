const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtSecretKey="qwertyuiopasdfghjklzxcvbnmqwerty"
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

    login=async (req,res)=>
        {
            let email=req.body.email;
            let pwd=req.body.password;
            try{
                const data=await userModel.findOne({email});
            if(!data)
            {
                return res.status(400).json({message:"Please enter correct credentials"});
            }    
            const password=await bcrypt.compare(pwd,data.password);
            if(!password)
                {
                    return res.status(400).json({message:"please enter correct password"});
                }
                const key={user:{id: data.id}};
                const options={
                    expiresIn:'1d',
                };
                const authToken =jwt.sign(key,jwtSecretKey,options);
                return res.json({userData:data,authToken:authToken});

        }  
        catch(error)
        {
            res.status(500).json({message:error.message});
        }
    }
    module.exports=
        {
            register,login
        }