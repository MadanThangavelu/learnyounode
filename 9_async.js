var http = require('http');
var bl = require('bl');
var a = [process.argv[2], process.argv[3], process.argv[4]];


var z = function(urls){
	var url_response_hashes = {};
	var submitted_urls = [];
	var response_counts = 0;

	acquire_url = function(url) {
		submitted_urls.push(url);
		http.get(url, function(response) {
			response.pipe(bl(
				function(err, data){
					var result = data.toString();
					url_response_hashes[url] = result;
					response_counts += 1;

					if (response_counts == 3){
						for(j=0; j<submitted_urls.length; j++){
							console.log(url_response_hashes[submitted_urls[j]]);
						}
					}
				}
			));
		});
	};

	for(i=0; i<urls.length; i++){
		acquire_url(urls[i]);
	}



};


z(a);