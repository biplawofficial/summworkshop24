// const { error } = require('console')
const fs=require('fs')
fs.readFile('./read.txt','utf-8',(error,data)=>
{
    if(error)
        console.log(error);
    else
    console.log(data);
})

console.log("hello");
