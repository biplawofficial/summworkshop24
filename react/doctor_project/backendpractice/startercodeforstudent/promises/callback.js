const file = require('fs')
file.readFile('text1.txt','utf-8',(error,data)=>
{
    if(error)
        console.log("error")
    else
    {
        console.log(data)
        file.readFile("text2.txt","utf-8",(error,data)=>
        {
            if(error)
                console.log("error")
            else
            {
                console.log(data)
                file.readFile("text3.txt","utf-8",(error,data)=>
                {
                    if(error)
                        console.log("error")
                    else
                    console.log(data);
                })
            }
        })
    }
})

