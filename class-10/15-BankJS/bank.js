var fs = require("fs");
var transaction = process.argv[2];

fs.readFile("movies.txt", "utf8", function(error, data) {

	if(transaction === undefined){
		console.log("please enter transaction type");
	}else{
		var numbers = parseFloat(data.split(", "));

		if(transaction === "total"){

		}
	}