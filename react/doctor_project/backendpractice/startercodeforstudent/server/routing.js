const http=require('http')
const server=http.createServer((req,res)=>
{
    const urll=req.url;
    if(urll==='/'){
        res.writeHead(200);
        res.end('welcome to nims')
    }
    else if(urll=='/eng'){
        res.writeHead(200);
        res.end('welcome to Engineering')
    }
    else if(urll=='/med'){
        res.writeHead(200);
        res.end('welcome to Nims Medical')
    }
    else {
        res.writeHead(404);
        res.end('not found')
    }
   
})
server.listen(8001,()=>
    {
        console.log("hello")
    })