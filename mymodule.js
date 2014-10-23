module.exports = function(directory_name, extension_string, callback) {
	var data =  [];
	fs = require('fs');
	fs.readdir(directory_name, function(err, list) {
		if(err){
			return callback(err);
		}

		for(j=0; j < list.length; j++){
			if (list[j].match(/.md$/)){
				data.push(list[j]);
			}
		}
		callback(err, data);
	});
};