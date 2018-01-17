function Character(name, profession, gender, age, strength, hitPoints){
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = parseInt(age);
	this.strength = parseInt(strength);
	this.hitPoints = parseInt(hitPoints);
	this.currentHP = this.hitPoints;
	this.printStats = function(){
		console.log("\nName: " + this.name);
		console.log("Profession: " + this.profession);
		console.log("Gender: " + this.gender);
		console.log("Age: " + this.age);
		console.log("Strength: " + this.strength);
		console.log("Hit Points: " + this.currentHP);
	}
	this.isAlive = function(){
		if(this.currentHP > 0){
			//console.log(this.name + " is alive");
			return true;
		}else{
			//console.log(this.name + " is dead");
			return false;
		}
	}
	this.attack = function(enemyHP){
		return enemyHP - this.strength;
	}
	this.levelUP = function(){
		this.age += 1;
		this.strength += 5;
		this.hitPoints += 25;
	}
	this.reset = function(){
		this.currentHP = this.hitPoints;
	}
}


var mage = new Character("Maize", "Wizard", "Female", 1, 50, 100);
var warrior = new Character("Tordek", "Fighter", "Male", 1, 30, 240);

mage.printStats();
warrior.printStats();

function combat(char1, char2){

	var damage = char2.attack(char1.currentHP);
	char1.currentHP = damage;
	damage = char1.attack(char2.currentHP);
	char2.currentHP = damage;
	// char1.printStats();
	// char2.printStats();
	if(char1.isAlive()){
		if(char2.isAlive()){
			char1.printStats();
			char2.printStats();
		}else{
			console.log(char1.name + " Wins!");
			char2.levelUP();
		}
	}else{
		if(char2.isAlive()){
			console.log(char2.name + " Wins!");
			char1.levelUP();
		}else{
			console.log("Oh No! They both perished");
			if(char1.currentHP < char2.currentHP){
				char1.levelUP();
			}else{
				char2.levelUP();
			}
		}
	}
}
for(var i = 0; i < 10; i++){
	warrior.reset();
	mage.reset();
	while(mage.isAlive() && warrior.isAlive()){
		combat(warrior, mage);
	}
}



