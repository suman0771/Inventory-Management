const express =require('express')

const server =express();

server.get("/",(req,res)=>{
    return res.send("Welcome to Inventory APP")

})
server.listen(3400)