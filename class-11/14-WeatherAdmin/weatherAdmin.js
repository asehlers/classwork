var fs = require("fs");
var UserSearch = require("./userSearch.js");

function WeatherAdmin(){
	this.newUserSearch = function(name, location){
		var userSearch = new UserSearch(name, location);

		userSearch.getWeather();
		var log = '\nName: ${userSearch.name} Location: ${userSearch.location} Date: ${userSearch.date}';
		fs.appendFile("log.txt", log, function(err){
			if(err){
				return err;
			}

			console.log("Log was sucessfully saved!");
		});
	};

	this.getData = function(){
		fs.readFile("log.txt", "utf8", function(err, data){
			console.log(data);
		});
	};
}

var newAdmin = new WeatherAdmin();

newAdmin.newUserSearch("Franklin", "somerset, NJ");
newAdmin.newUserSearch("Andrew", "dushore, PA");
newAdmin.newUserSearch("Molly", "miami, FL");

newAdmin.getData();