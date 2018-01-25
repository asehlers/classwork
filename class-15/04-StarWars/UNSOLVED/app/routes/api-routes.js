// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var orm = require("../model/character.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      
      //should use findONE instead
      orm.findAll({where: {
        name: req.params.characters
      }}).then( function(data) {
        res.json(data);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using the ORM here to run our searches)
      orm.findAll({}).then(function(data) {
        res.json(data);
      });
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var character = req.body;
    character.routeName = character.name.replace(/\S+/g,"").toLowerCase();
    // Then send it to the ORM to "save" into the DB.
    orm.create(character).then( function(data) {
      console.log(data);
    });

  });
};
