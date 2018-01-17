function Animal(kind, raining, noise){
	this.kind = kind;
	this.raining = raining;
	this.noise = noise;
	this.makeNoise = function(){
	if(this.raining){
			console.log(this.noise);
		}
	}
}

// var dog = {
// 	raining: true,
// 	noise: "Woof!",
// 	makeNoise: function(){
// 		if(this.raining){
// 			console.log(this.noise);
// 		}
// 	}	
// }

// var cats = {
// 	raining: false,
// 	noise: "Meow!",
// 	makeNoise: function(){
// 		if(this.raining){
// 			console.log(this.noise);
// 		}
// 	}
// }
var dog = new Animal("dog", true, "Woof!");
var cat = new Animal("cat", false, "Meow!");
var pig = new Animal("pig", true, "Oink!");
dog.makeNoise();
// cat.raining = true;
cat.makeNoise();

function massHysteria(animal1, animal2){
	if(animal1.raining && animal2.raining){
		console.log(animal1.kind.toUpperCase() + "S AND " + animal2.kind.toUpperCase() + "S LIVING TOGETHER! MASS HYSTERIA!");
	}else{
		animal1.makeNoise();
		animal2.makeNoise();
	}
}
// BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the `raining` keys are equal to true.

// BONUS: Look to see if you can find any means to simplify your code further and further


massHysteria(dog, cat);
massHysteria(cat, pig);

//CAPITALIZE CONSTRUCTORS

