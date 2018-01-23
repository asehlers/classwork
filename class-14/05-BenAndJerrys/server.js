// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var iceCreams = 
[
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2}
];

// Routes
//render uses view engine to display passed parameters
//1st arg is name of view to render and 2nd is data
app.get("/icecream/:name", function(req, res) 
{
    for(var i = 0; i < iceCreams.length; i++)
    {
        if(iceCreams[i].name === req.params.name)
        {
            res.render("index", iceCreams[i]);
            i = iceCreams.length;
        }
    }
});

app.get("/icecreams", function(req, res) 
{
  res.render("all", {iceCreams: iceCreams});
});



// Initiate the listener.
app.listen(port);
