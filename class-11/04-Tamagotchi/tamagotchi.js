var inquirer = require("inquirer");

function DigitalPal(){
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;
	this.feed = function(){
		if(this.hungry){
			console.log("That was yummy!");
			this.hungry = false;
			this.sleepy = true;
		}else{
			console.log("No thanks! I'm full.");
		}
	}
	this.sleep = function () {
		if(this.sleepy){
			console.log("Zzzzzzzz");
			this.sleepy = false;
			this.bored = true;
			this.increaseAge();
		}else{
			console.log("No way! I'm not tired");
		}
	}
	this.play = function() {
		if(!this.bored){
			console.log("Not right now. Later?");
		}
		else{
			console.log("Yay! Let's play!");
			this.bored = false;
			this.hungry = true;
		}
	}
	this.increaseAge = function (){
		this.age++;
		console.log("Happy Birthday to me! I'm " + this.age + " years old");
	}
}

dog = new DigitalPal();
dog.outside = false;
dog.bark = function(){
	console.log("Woof! Woof!");
};
dog.goOutside = function(){
	if(this.outside === false){
		console.log("Yay! I love the outdoors!");
		this.outside = true;
		this.bark();
	}else{
		console.log("We're already ouside though...");
	}
}
dog.goInside = function(){
	if(this.outside){
		console.log("Do we have to? Fine...");
		this.outside = false;
	}else{
		console.log("I'm already inside...");
	}
}

cat = new DigitalPal();
cat.houseCondition = 100;
cat.meow = function(){
	console.log("Meow! Meow!");
}
cat.destroyFurniture = function(){
	if(this.houseCondition > 0 && this.bored){
		console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
		this.houseCondition -= 10;
		this.bored = false;
		this.sleepy = true;
	}
}
cat.buyNewFurniture = function(){
	this.houseCondition += 50;
	console.log("Are you sure about that?");
}	


function runoffInput(pet){
	inquirer.prompt([
		{
			type: "input",
			name: "choice",
			message: "choose what to do with your pet(feed, sleep, play, \n go outside, go inside, destory furniture, buy furniture)",
		}
	]).then(function(data){
		if(data.choice == "feed"){
			pet.feed();
		}else if(data.choice == "sleep"){
			pet.sleep();
		}else if(data.choice == "play"){
			pet.play();
		}else if(data.choice == "go outside"){
			pet.goOutside();
		}else if(data.choice == "go inside"){
			pet.goInside();
		}else if(data.choice == "destroy furniture"){
			pet.destroyFurniture();
		}else if(data.choice == "buy furniture"){
			pet.buyNewFurniture();
		}
		console.log("you pet is now " + pet.age + " years old");
		if(pet.age < 3){
			runoffInput(pet);
		}
	});
}

// runoffInput(dog);
runoffInput(cat);
