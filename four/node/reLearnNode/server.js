var http = require('http');
var fs = require('fs');
var port = 8000;

function handler(request, response){
  var url = request.url;
  console.log(url);
  if(url.length === 1){
    response.writeHead(200,{"Content-Type":"text/html"});
    var path = __dirname;
    fs.readFile(__dirname + '/index.html', function(error, index){
      response.end(index);
    });
  }
  else {
    fs.readFile(__dirname + url, function(error, file){
      if (error){
        response.end();
      } else {
      var ext = url.split('.')[1];
    response.writeHead(200, {'Content-Type' : 'text/' + ext});
  response.end(file);
    }
  });
}
}

http.createServer(handler).listen(port);

console.log('node http is on http://localhost:' + port);

module.exports = {
    handler: handler
};
