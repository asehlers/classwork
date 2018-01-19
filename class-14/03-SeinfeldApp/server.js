// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Specify the port.
var port = 3020;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "seinfeld_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/cast", function(req, res) {

  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query("SELECT * FROM actors", function(err, result) {

    // We then begin building out HTML elements for the page.
    var html = "<h1> Seinfeld Actors </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Name: " + result[i].name + " </p></li>";
      html += "<p>Coolness: " + result[i].coolness_points + " </p></li>";
      html += "<p>Attitude: " + result[i].attitude + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});


app.get("/coolness-chart", function(req, res) {

  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query("SELECT * FROM actors ORDER BY coolness_points", function(err, result) {

    // We then begin building out HTML elements for the page.
    var html = "<h1> Seinfeld Actors </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Name: " + result[i].name + " </p></li>";
      html += "<p>Coolness: " + result[i].coolness_points + " </p></li>";
      html += "<p>Attitude: " + result[i].attitude + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});


app.get("/attitude-chart/:att", function(req, res) {

  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query("SELECT * FROM actors WHERE attitude =?", [req.params.att], function(err, result) {

    // We then begin building out HTML elements for the page.
    var html = "<h1> Seinfeld Actors </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Name: " + result[i].name + " </p></li>";
      html += "<p>Coolness: " + result[i].coolness_points + " </p></li>";
      html += "<p>Attitude: " + result[i].attitude + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});

// Initiate the listener.
app.listen(port);