var http = require('http');

var server=http.createServer(function(req,res){
    console.log('request was made:'+req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hey Nodejs');
});

server.listen(3000);
console.log("Success,i'm listening from port:3000");