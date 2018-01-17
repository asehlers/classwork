// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt. 

// ===========================================================================================================
var inquirer = require("inquirer");
var userHealth = 70;
var zombieHealth = 15;
var zombieGuess = 0;
var damage = 0;
while(userHealth > 0 && zombieHealth > 0){
	inquirer.prompt([
		{
			type: "input",
			name: "guess",
			message: "guess value from 1-5 to fight the zombie"
		}
	]).then(function(result){
		zombieGuess = Math.floor(Math.random()*5)+1;
		damage = Math.floor(Math.random()*5)+1;
		if(result.guess == zombieGuess){
			zombieHealth -= damage;
		}else{
			userHealth -= damage;
		}
	});
	console.log("Your health: " + userHealth);
	console.log("Zombie health: " + zombieHealth);
}