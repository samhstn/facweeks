var test = require('tape');
var url = require('url');
var querystring = require('querystring');
var server = require('../lib/server.js');
test('server exists', function(t){
    var actual;

    console.log(Object.keys(server).length);

    actual = Object.keys(server).length > 0;

    t.ok(actual, 'server exists!');
    t.end();
});

test('/login endpoint redirect to gh', function(t){
    var expected, actual;
    var options = {
        url: '/login',
        method: 'GET'
    };
    server.inject(options, function(response){
        actual = response.statusCode;
        expected = 302;
        t.equal(actual, expected, 'server responds with 302');

        // this is where we are redirecting the user
        var redirect = response.headers.location;

        console.log(redirect);

        // parse that url into a config object
        var redirectOptions = url.parse(redirect);

        console.log('$$$$$$$$$$$$', redirectOptions);

        actual = redirectOptions.host;
        expected = 'github.com';
        console.log('---', actual);
        t.equal(actual, expected, 'redirected to github');

        var queryOptions = querystring.parse(redirectOptions.query);

        console.log('************', queryOptions);

        console.log('676767676776767',redirectOptions.query);

        actual = queryOptions.client_id;
        expected = process.env.GITHUB_CLIENT_ID;
        t.equal(actual, expected, 'client id in redirect query');

        t.end();
    });
});
