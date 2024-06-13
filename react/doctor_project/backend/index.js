const express=require('express')
const mongoose=require('mongoose')
const userRoutes=require("./routes/userRoutes")
const app=express();
const PORT=3009; 
const cors=require("cors")
app.use(cors());
app.use(express.json());
app.use(userRoutes);
// app.all("*",(req,res)=>
// {
//     res.status(404).send({
//         message:`not a valid url${req.origin}`})
// })
mongoose.connect("mongodb://127.0.0.1:27017/doctorsapp").then(()=>
{
    console.log("connected to mongoDB");

}).catch((err)=>
console.log(err))

app.listen(PORT,()=>
{
    console.log(`server started at ${PORT}`);
})