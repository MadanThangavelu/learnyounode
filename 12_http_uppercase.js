var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	var map = require('through2-map');

    var uppercaser = map(function(chunk) {
		return chunk.toString().toUpperCase();
    });
	req.pipe(uppercaser).pipe(res);
});

server.listen(process.argv[2]);