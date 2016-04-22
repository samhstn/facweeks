var http = require('http');

// set the port for the server
var port = process.env.PORT || 8000;

function handler(request, response) {
    //display 'HELLO WORLD' when the user is on the home page
    var url = request.url; //e.g. '/'
    if (url.length === 1) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end("Hello World!");
    }
    else if (url.length > 1){
        response.writeHead(200, {"Content-Type": "text/html"});
        var string = url.split("/")[1];
        response.end(string);
    }
}

http.createServer(handler).listen(port);

console.log('node http server listening on http://localhost:' + port);
