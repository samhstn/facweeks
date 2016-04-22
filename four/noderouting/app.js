var server = require('./server.js');
var routing = require('./routing.js');

server.server(routing.router, routing.port);

console.log('node http is on http://localhost:' + routing.port);
