var connect = require("connect");
var app = connect();

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Using conect() Simple Http Server started");
});

app.use(logger);
app.use(hello);


function logger(req, res, next){
    console.log("from inside log - %s %s", req.method, req.url);
    next();
}

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world from ganesh ghag');
}