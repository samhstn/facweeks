var Hapi = require('hapi');
var http = require('https');
var url = require('url');
var querystring = require('querystring');
require('env2')('config.env');

var server = new Hapi.Server();

server.register(require('inert'), function(err){
    if(err){
        throw err;
    }
});

function makeRequest(options, cb){
    var request = http.request(options, function(response){
        var body = '';
        response.on('data', function(chunk){
            body += chunk;
        });
        response.on('end', function(){
            cb(null, body);
        });
    });
    console.log('-request->',request,'<-request-');

    request.on('error', function(err){
        console.error('request to ' + options.host + ' failed!');
        cb(err);
    });

    request.write(options.body);
    request.end();
}

var port = process.env.PORT || 4000;

function createGithubAuthRoute(){
    return 'https://github.com/login/oauth/authorize?' + querystring.stringify({
            client_id: process.env.GITHUB_CLIENT_ID,
            redirect_uri: process.env.BASE_URL + '/welcome'
    });
}

server.connection({
    port: port
});

server.route([{
    path: '/login',
    method: 'GET',
    handler: function(request, reply){
        reply.redirect(createGithubAuthRoute());
    }
},
{
    path: '/welcome',
    method: 'GET',
    handler: function(request, reply){
        makeRequest({
            hostname: 'github.com',
            path: '/login/oauth/access_token',
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: querystring.stringify({
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code: request.query.code
            })
        }, function(err, response){
            var token = JSON.parse(response).access_token;
            reply.file('./public/index.html').state('access_token', token);
            // reply(token);
        });
    }
},
{
    path: "/getData",
    method: "GET",
    handler: function(request, reply) {
        var token = request.state.access_token;
        var options = {
            hostname: "api.github.com",
            path: "/user",
            method: "GET",
            body: "",
            headers: {
                "Authorization": "token " + token,
                'User-Agent': 'oauth_walkthrough'
            }
        };
        makeRequest(options, function(err, response){
            // console.log(JSON.parse(response));
            reply(response);
        });
    }
}
]);

module.exports = server;
