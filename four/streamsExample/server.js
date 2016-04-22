var fs = require('fs');

var writeData = 'Blah blah';

var writeStream = fs.createWriteStream('output.txt');

var ReadStream = fs.createReadStream('input.txt');

var data = '';

ReadStream.setEncoding('utf8');

ReadStream.on('data', function(chunk){
    data += chunk;
});

ReadStream.on('end', function(){
    writeStream.write(data, 'utf8');

    writeStream.end();

    writeStream.on('finish', function(){
        console.log('data has been written!');
    });
    console.log('data has finished streaming!');
});

//run the command: node server.js
//to see this working
