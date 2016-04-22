var http = require('http');
var fs = require('fs');
var port = 8000;
var redisFunctions = require('./redis.js');

function handler(req, res){
    var url = req.url;
    if(url === '/'){
        var index = fs.readFileSync(__dirname + '/index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(index);
    }
    else if(url.indexOf('.') > -1){
        var file = fs.readFileSync(__dirname + url);
        var ext = url.split('.')[1];
        res.writeHead(200, {'Content-Type': 'text/' + ext});
        res.end(file);
    }
    else if(url.match('/add')){
        var inputting = url.split('/add')[1].split(':');
        var input = inputting[0];
        var description = inputting[1];
        redisFunctions.addToDb(input, description);
    }
    else if(url === '/display'){
        redisFunctions.getData(function(reply){
            console.log(reply);
            var data = JSON.stringify(reply);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
}

var server = http.createServer(handler).listen(port);
console.log("server is running on port " + port);
