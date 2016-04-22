// 'use strict';

var Hapi = require('hapi');
var server = new Hapi.Server();
var Inert = require('inert');
var Vision = require('vision');
var Handlebars = require('handlebars');

server.connection({
    port: 3000
});

var plugins = [
    Inert,
    Vision
];

server.register(plugins, function(error){

    server.views({
        engines: {html: Handlebars},
        relativeTo: __dirname,
        path: 'views',
        layout: 'default',
        layoutPath: 'views/layout'
    });

    server.route([{
        method: 'GET',
        path: '/',
        handler: function(request, reply){
            var data = {
                dog: 'Rocky'
            };
            reply.view('home', {data: data});
        }
    },

    {
        method: 'POST',
        path: '/form',
        handler: function(request, reply){
            var data = request.payload;
            console.log(data);
            reply(data);
        }
    },

    {
        method: 'GET',
        path: '/about',
        handler: function(request, reply){
            reply('About page');
        }
    },
    {
        method: 'GET',
        path: '/contact',
        handler: function(request, reply){
            reply('Contact page');
        }
    },
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public'
            }
        }
    }
    ]);
});


server.start(function(err){
    if(err){
        throw err;
    }
    console.log('Server is running at: ', server.info.uri);
});
