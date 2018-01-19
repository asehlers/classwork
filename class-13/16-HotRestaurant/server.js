// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Twilio Credentials
const accountSid = 'AC526331aed181790ec1e2d2d166bd190e';
const authToken = '1e4ce2c1250d1ce139fdf8cadb670f28';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);


// table data
// =============================================================
var lastRoute = 3;
var tables = [
  // {
  //   routeName: 1,
  //   name: "Anna",
  //   email: "",
  //   phoneNumber: ""
  // }
];
var waitlist = [
  // {
  //   routeName: 6,
  //   name: "Chanel",
  //   email: "",
  //   phoneNumber: ""
  // }
];
// functions
  function check(bool, name) {
    if(bool){
      // alert("You made a reservation under the name '"+name+"'.");
    } else {
      // alert("You are on the waitlist under the name '"+name+"'.");
    }
  }

  function textMessage(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\D/, '');
    console.log("function called");
    client.messages.create(
      {
        to: '+1' + phoneNumber,
        from: '+16095663148',
        body: 'Your table is ready!',
      },
      (err, message) => {
        if(err) throw err;
        console.log(message.sid);
      }
    );
  }

  function removeTable(number, type){
    if(type == "table"){
      tables.splice(number, 1);
      if(waitlist.length > 0){
        tables.push(waitlist[0]);
        waitlist.splice(0, 1);
        textMessage(tables[tables.length -1].phoneNumber);

      }
    } else {
      waitlist.splice(number, 1);

    } 

  }

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
// Get all tables
app.get("/all", function(req, res) {
  res.json(tables);
  res.json(waitlist);
});

app.get("/api/tables", function(req, res) {
  res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});

app.get("/contact/:number", function(req, res) {
  console.log("post called");
  textMessage(req.params.number);
  res.end();
});

app.get("/removeTable/:index", function(req, res){
  console.log("remove table");
  removeTable(req.params.index, "table");
  res.end();
});

app.get("/removeWait/:index", function(req, res){
  console.log("remove waitlist");
  removeTable(req.params.index, "wait");
  res.end();
});
// Search for Specific table (or all tables) - provides JSON
// app.get("/api/:tables?", function(req, res) {
//   var chosen = req.params.tables;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < tables.length; i++) {
//       if (chosen === tables[i]) {
//         return res.json(tables[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(tables);
// });

// Create New tables - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newtable = req.body;
  //newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();
  newtable.routeName = tables.length + waitlist.length;


  console.log(newtable);
  if (newtable.routeName < 5) {
    tables.push(newtable);
    check(true, newtable.name);

  }
  else {
    waitlist.push(newtable);
    check(false, newtable.name);
  }

  res.json(newtable);
});

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});