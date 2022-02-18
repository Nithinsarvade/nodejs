var http = require('http');
var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/Assignment-1.js', 'utf8');

myReadStream.on('data', function (chunk) {
    console.log('new chunk received:');
    console.log(chunk);
});