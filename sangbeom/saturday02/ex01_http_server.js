
/***

**/

// npm install express --save

var http = require('http');
var server = http.createServer();

server.on('connection',function(socket){
    console.log('connection ok!')
    console.dir(socket);
});


server.on('close',function(){
    console.log('close');
});

server.on('request',function(request,response){
    console.log('request 요청 받음');
    response.writeHead(200,{'Content-type':'text/html;charset=utf8'});
    /// text/plain 은 글자로 나오게 된다. <pre>...</pre>
    response.write('<!DOCTYPE html>');
    response.write('<html>');
    response.write('<head>');
    response.write('<title>응답페이지</title>');
    response.write('</head>');
    response.write('<body>');
    response.write('<h1>위대한 노드제이에스</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();// end 하지 않으면 무한루프 돈다.
    
    
  //  response.end("<h1>  homepage </h1>");
    
   // server.close();
})

server.listen(3000,function(){
    console.log("http://localhost:%d",3000);
});

