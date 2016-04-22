var tape = require('tape');
var server = require('../server.js');
var shot = require('shot');
var http = require('http');

tape("check if 1 is equal to 1", function(t){
    t.equal(1,1,"success!");
    t.end();
});

tape("check if status code is 200", function(t){
    shot.inject(server.handler, {
        method: 'get',
        url: '/'
    }, function(res){
        var code = res.raw.res.statusCode;
        //console.log("code inside function --------", code);
        t.equal(code, 200, "success!");
        t.end();
    });
});
