//
// # SimpleServer
//
// A bare minimum Http Server serving static content
// from client directory
//
var http = require('http');
var path = require('path');
var express = require('express');

var router = express();
router.use(express.static(path.resolve(__dirname, 'client')));

var server = http.createServer(router);
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Simple Http Server listening at", addr.address + ":" + addr.port);
});
