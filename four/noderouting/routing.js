var handlers = require("./handler.js");

var port = process.env.PORT || 3000;

function router(request, response) {
    if(request.url === '/' || request.url === '/home'){
        handlers.home(request, response);
    }
}

module.exports = {
    router: router,
    port: port
};
