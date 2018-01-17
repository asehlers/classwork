// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");
var password = "password";

inquirer.prompt([
	//basic input prompt
	{
		type: "input",
		name: "username",
		message: "Please enter your username:"
	},
	{
		type: "password",
		name: "password",
		message: "Please enter your password:"
	},
	{
		type: "list",
		name: "warframe",
		message: "Please choose a warframe:",
		choices: ["Excalibur", "Mag", "Volt"]
	},
	{
		type: "checkbox",
		name: "weapon",
		message: "Please choose your weapons:",
		choices: ["MK-1 Braxton", "Kunai", "Sword"]
	},
	{
		type: "confirm",
		name: "sentinal",
		message: "Would you like to deploy your sentinal"
	}
	]).then(function(inquirerResponse){
		// console.log(inquirerResponse.username);
		// console.log(inquirerResponse.password);
		// console.log(inquirerResponse.warframe);
		// console.log(inquirerResponse.weapon);
		// console.log(inquirerResponse.sentinal);
		if(inquirerResponse.password === "password"){
			var comp = "not";
			if(inquirerResponse.sentinal){
				comp = ""
			}
			var weapons = inquirerResponse.weapon;
			var weaponOutput = weapons[0];
			for(var i = 1; i < weapons.length; i++){
				weaponOutput += ", " + weapons[i];
			}
			console.log("Tenno " + inquirerResponse.username + " is ready to drop with " + inquirerResponse.warframe+".");
			console.log("You have chosen " + inquirerResponse.weapon.toString() + " for weaponry and will " + comp + " bring your sentinal");
		}
	});