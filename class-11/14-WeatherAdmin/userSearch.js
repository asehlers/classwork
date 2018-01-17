var fs = require("fs");
var weather = require("weather-js");


var UserSearch = function(name,location){

	this.name = name;
	this.location = location;
	this.date = Date.now();

}
	UserSearch.prototype.getWeather = function(){
		weather.find({search:this.location, degreeType: "F"},function(err, result) {

  	
  if (err) {
    console.log(err);
  }
  console.log(JSON.stringify(result, null , 2));
  

  // fs.appendFile("log.txt", this.toString() + JSON.stringify(result), function(err){
  // 	if (err){
  // 		console.log(err)
  // 	}
  // });


  return result;


  
});
	};
	var newLocation = new UserSearch("Kiernan", "Somerset, NJ");

		newLocation.getWeather();
	


module.exports = UserSearch;