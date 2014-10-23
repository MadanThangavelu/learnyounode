var bl = require('bl');
var http = require('http');


http.get(process.argv[2], function(response) {
	response.pipe(bl(
		function(err, data){
			var result = data.toString();
			console.log(result.length);
			console.log(result);
		}
	));
});

