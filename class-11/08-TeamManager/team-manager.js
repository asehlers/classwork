var inquirer = require("inquirer");

function Player(name, position, offense, defense){
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;

	this.goodGame = function(){
		if(Math.floor(Math.random() * 2) === 1){
			this.offense++;
			console.log(this.name + " offense has increased by 1!");
		}
		else{
			this.defense++;
			console.log(this.name + " defense has increased by 1!");
		}
	}

	this.badGame = function(){
		if(Math.floor(Math.random() * 2) === 1){
			this.offense--;
			console.log(this.name + " offense has decreased by 1! You Suck!");
		}
		else{
			this.defense--;
			console.log(this.name + " defense has decreased by 1! You Suck!");
		}
	}

	this.printStats = function(){
		console.log(`Name: ${this.name}`);
		console.log(`Position: ${this.position}`);
		console.log(`Offense: ${this.offense}`);
		console.log(`Defense: ${this.defense}`);
	}

}

var count = 0;

var starters = [];
var subs = [];

function createTeam(){

	if(count < 8){

		inquirer.prompt([
			{
				type: "input",
				name: "name",
				default: "a",
				message: "Please Enter the Player's Name"
			},
			{
				type: "list",
				name: "position",
				message: "Please Select the Player's Position",
				choices: ["Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"]
			},
			{
				name: "offense",
				message: "Please Enter the Player's Offense Rating",
				default: 5,

				validate: function (input) {
					if(isNaN(input)){
						return "Please enter a valid number";
					}
					else if(parseInt(input) < 1 || parseInt(input) > 10){
						return "Please enter a number between 1 and 10";
					}

					return true;
				}
			},
			{
				name: "defense",
				message: "Please Enter the Player's Defense Rating",
				default: 5,
				validate: function (input) {
					if(isNaN(input)){
						return "Please enter a valid number";
					}
					else if(parseInt(input) < 1 || parseInt(input) > 10){
						return "Please enter a number between 1 and 10";
					}

					return true;
				}
			}
		]).then(function(answers){
			console.log(answers);

			var newPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense);

			newPlayer.printStats();

			if(starters.length < 5){
				starters.push(newPlayer);
				console.log(`${newPlayer.name} has been added to the starters.`);
			}
			else {
				subs.push(newPlayer);
				console.log(`${newPlayer.name} has been added to the subs.`);
			}

			count++;

			createTeam();
		});
	}
	else{
		console.log("We've got our team!");

		console.log("\nHERE ARE YOUR STARTING FIVE: ")
		for (var i = 0; i < starters.length; i++) {
			starters[i].printStats();
		}

		console.log("\n\nHERE ARE YOUR SUBS: ");
		for (var i = 0; i < subs.length; i++) {
			subs[i].printStats();
		}

		playGame();
	}
}
var playCount = 0;
var currentScore = 0;

function playGame(){
	if(playCount < 5){
		playCount++;
		var opposedOffence = Math.floor(Math.random()*40)+1;
		console.log("offence " + opposedOffence);
		var opposedDefence = Math.floor(Math.random()*40)+1;
		console.log("defence " + opposedDefence);

		if(opposedOffence < getOffense()){
			currentScore++;
		}
		if(opposedDefence > getDefense()){
			currentScore--;
		}

		inquirer.prompt([
			{
				type: "confirm",
				name: "swap",
				message: "would you like to substitute a player?"
			}
		]).then(function(change){
			if(change.swap){
				inquirer.prompt([
					{
						type: "list",
						name: "starter",
						message: "choose starter to switch out",
						choices: starters
					},
					{
						type: "list",
						name: "sub",
						message: "choose sub to switch in",
						choices: subs
					}
				]).then(function(answer){
					starters[starters.findIndex(i => i.name == answer.starter)] = answer.sub;
					subs[subs.findIndex(i => i.name == answer.sub)] = answer.starter;
					console.log(currentScore);
					playGame();
				});
			}else{
				console.log(currentScore);
				playGame();
			}
		});		
	}else{
		for(var k = 0; k < starters.length; k++){
			if(currentScore > 0){
				starters[k].goodGame();
			}else if(currentScore < 0){
				starters[k].badGame();
			}
		}
		console.log("\nHERE ARE YOUR STARTING FIVE: ")
		for (var i = 0; i < starters.length; i++) {
			starters[i].printStats();
		}

		console.log("\n\nHERE ARE YOUR SUBS: ");
		for (var i = 0; i < subs.length; i++) {
			subs[i].printStats();
		}
		inquirer.prompt([
			{
				type: "confirm",
				name: "continue",
				message: "would you like to play again?"
			}
		]).then(function(again){
			if(again.continue){
				playCount = 0;
				currentScore = 0;
				playGame();
			}
		});
	}
}

function getOffense(){
	var currentOffense = 0;
	for(var j = 0; j < starters.length; j++){
		currentOffense += starters[j].offense;
	}
	console.log("currentOffense " + currentOffense);
	return currentOffense;
}

function getDefense(){
	var currentDefense = 0;
	for(var j = 0; j < starters.length; j++){
		currentDefense += starters[j].defense;
	}
	console.log("currentDefense " + currentDefense);
	return currentDefense;
}

createTeam();
