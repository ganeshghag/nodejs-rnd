//
// A bare minimum Http Server streaming resource to client
//
var http = require('http');
var fs = require('fs');


var server = http.createServer( function (req,resp){
    resp.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream('./client/trial.html').pipe(resp);
});

server.listen(process.env.PORT, process.env.IP, function(){
  var addr = server.address();
  console.log("Simple Http Server listening at", addr.address + ":" + addr.port);
});
