const express = require("express");
const app = express();
const path = require("path");
var fs = require("fs");
var porta = process.env.PORT || 8080;

app.use(express.static("./front"));

app.get("/calculadora",function(req,res){
    res.sendFile(path.resolve(__dirname +"/index.html"));
    
    });

app.listen(porta, function(){
    console.log('................................online');
})
