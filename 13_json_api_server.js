var http = require('http');
var fs = require('fs');
var url = require('url');

	function constructResponseJson(d) {
		var hour = d.getHours();

		var min  = d.getMinutes();

		var sec  = d.getSeconds();

		return JSON.stringify({
		  hour: hour,
		  minute: min,
		  second: sec
		});
	}


var server = http.createServer(function (req, res) {
	passed_timestamp = url.parse(req.url, true).query.iso;
	iso_date = new Date(passed_timestamp);

	if (req.url.match(/^\/api\/parsetime/)){
		result = constructResponseJson(iso_date);
	} else  {
		epoch_time = iso_date.getTime();
		result = JSON.stringify({unixtime: epoch_time});
	}

	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(result);
	} else {
		res.writeHead(400);
		res.end();
	}
});

server.listen(process.argv[2]);