var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function first(string, funct){

	console.log(string);
	funct();
}
// Write a function that runs a function argument if
// its other argument is truthy.
function second(arg, funct){
	if(arg){
		funct();
	}
}
// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function third(arg, funct){
	return funct(arg);
}

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo uusing callbacks anywhere? Where?
fs.writeFile("test.txt", "I'm in a file", function(err){
	if(err){
		console.log(err);
	}

	console.log("write file callback");
});

function test(){
	console.log("it worked");
}

function test2(val){
	return val*2;
}

first("string", test);
second(null, test);
console.log(third(4, test2));