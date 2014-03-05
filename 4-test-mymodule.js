//
// A bare minimum Http Server echoing hello world
//
var http = require('http');
var mymod = require('./mymodule');

var server = http.createServer( function (req,resp){
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.end(mymod.someMethod('ModuleTest Input'));
    
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Simple Http Server listening at", addr.address + ":" + addr.port);
});


