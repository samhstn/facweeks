var http = require('http');
var fs = require('fs');
var server = http.createServer(handler);
var io = require('socket.io')(server);


var port = process.PORT || 3000;

function handler (req,res){
    var url = req.url;
    if(url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile(__dirname+'/index.html', function(err, data){
            res.end(data);
        });
    }
    else if(url.indexOf('.')>-1){
        var file = url;
        var ext = url.split('.')[1];
        res.writeHead(200, {'Content-Type': 'text/' + ext});
        fs.readFile(__dirname + url, function(err, file){
            res.end(file);
        });
    }
}

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log("------"+msg);
        io.emit('chat message', msg);
    });
});

server.listen(port);
console.log("your server is ready at " + port);
