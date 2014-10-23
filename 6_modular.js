var mymodule = require('./mymodule.js');


mymodule(process.argv[2], "md", function(err, data) {
	for (i=0; i< data.length; i++){
		console.log(data[i]);
	}
});

