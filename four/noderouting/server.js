http = require('http');

function server(router, port) {
    // Create server here. Hint: remember the http module?
    return http.createServer(router).listen(port);
}

module.exports = {
    server: server
};
