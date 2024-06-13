const http=require('http')
const url=require('url')
const server=http.createServer((req,res)=>
{
    const path=req.url;
    console.log(req.url)
    const{query}=url.parse(path,true)
    console.log(query)
        if(query.id==null)
{
    
    res.writeHead(200)
    res.end(`send id is`)
}
})
server.listen(8001,()=>
{
    console.log("started nims server")
})