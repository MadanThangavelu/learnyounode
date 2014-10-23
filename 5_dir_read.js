fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
	for(i=0; i < list.length; i++){
		if (list[i].match(/.md$/)){
			console.log(list[i]);
		}
	}
});