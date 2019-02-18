var express = require('express');
var app = express();


app.get('/',function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
    res.end('<h2>입구페이지</h2>');
});

app.get('/user',function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
    res.end('<h2>사용자페이지</h2>');
});

app.get('/login',function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
    res.end('<h2>로그인페이지</h2>');
});



app.listen(3000, ()=>{
    console.log("http://localhost:3000");
    
})