const file = require('fs/promises')


const getdata=async()=>
    {
        try{
            const data1=await file.readFile("./text1.txt","utf-8")
            console.log(data1)
            const data2=await file.readFile("./text2.txt","utf-8")
            console.log(data2)
            const data3=await file.readFile("./text3.txt","utf-8")
            console.log(data3)
        }
        catch(error)
        {
            console.log("error")
        }
    }

getdata()

    console.log("hello")