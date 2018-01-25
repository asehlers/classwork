// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/allChirps", function(req, res){
    var queryString = "SELECT * FROM chirps";
    connection.query(queryString, function(err, data){
      if (err) throw err;

      res.json(data);
    })
  });

  // Add a chirp
  app.post("/api/new", function(req, res){
    var queryString = "INSERT INTO chirps (author, chirp) VALUE (?, ?);"
    connection.query(queryString, [req.body.author, req.body.chirp], function(err, data){
      if(err) throw err;
      res.json("Chirp added WOOT!");
    })
  })

};
