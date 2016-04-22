var http = require("http");

var port = process.env.PORT || 7000;

function handler(request, response){
    var url = request.url;
    response.writeHead(200, {"Content-Type":"text/html"});
    response.end("Hello World");
}

http.createServer(handler).listen(port);

console.log("view on localhost:7000");
