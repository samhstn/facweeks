var redis = require('redis');
var client = redis.createClient();

function addToDb(input, description){
    client.HSET('favorite thing', input, description, function(err, reply){
        if(err){
            console.log(err);
        }
        else{console.log(reply);}
    });
}

function getData(callback){
    client.HGETALL('favorite thing', function(err, reply){
        if(err){
            console.log(err);
        }
        else{
            callback(reply);
        }
    });
}

module.exports = {
    addToDb: addToDb,
    getData: getData
};
