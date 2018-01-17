// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geo = require('geocoder');



// Take in the command line arguments
var city = process.argv[2].substring(0, process.argv[2].indexOf(','));
var state = process.argv[3];




// Build your address as an array or string
geo.geocode(city + ", " + state, function(err, data){
	if(err){
		console.log(err);
	}else{
		console.log(JSON.stringify(data, null, 2));
	}
});



// Then use Geocoder NPM to geocode the address
