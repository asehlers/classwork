// Initialize Firebase (YOUR OWN APP)
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBhRMca4axcM_3CI2ox2eJhopcXaX_1rw4",
    authDomain: "classworkdemo1.firebaseapp.com",
    databaseURL: "https://classworkdemo1.firebaseio.com",
    projectId: "classworkdemo1",
    storageBucket: "classworkdemo1.appspot.com",
    messagingSenderId: "720078777874"
  };
  firebase.initializeApp(config);


var database = firebase.database();

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot){
	console.log(snapshot.val());

	if(snapshot.val() === null){
		// Save new value to Firebase
	  database.ref().set({
	  	clickCount: clickCounter
	  });
	}
	else{

		clickCounter = snapshot.val().clickCount;

		$("#click-value").html(clickCounter.toString(16));

		console.log("ClickCounter: " + clickCounter);
	}
  console.log(snapshot.val().clickCount);
});

// Print the initial data to the console.


// Change the html to reflect the initial value.


// Change the clickCounter to match the data in the database


// Log the value of the clickCounter


// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;


  // Alert User and reset the counter
  if(clickCounter === 0){
  	alert("You Made It!");

  	clickCounter = initialValue;
  }


  // Save new value to Firebase
  database.ref().set({
  	clickCount: clickCounter
  })

  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
  	clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").html(clickCounter.toString(16));

});
