var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.use(express.static(path.join(__dirname, "public")));

// Express and MySQL code should go here.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM quotes;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { quotes: data });
  });
});

app.get("/:id", function(req, res) {
  connection.query("SELECT * FROM quotes WHERE id = ?;", [req.params.id], function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("single-quote", data[0]);
  });
});

app.post("/todos/", function(req, res){
  console.log(req.body.quote);
  connection.query("INSERT INTO quotes (author, quote) VALUES (?, ?)", [req.body.author, req.body.quote], function(err, data)
  {
    if(err){
      return res.status(500).end();
    }
    res.status(200).end();
  });
})

app.put("/todos/:id", function(req, res){
  console.log("in put");
  console.log("current id " + req.params.id);
  console.log("body quote " + req.body.quote);
  connection.query("UPDATE quotes SET quote = ? WHERE id=?", [req.body.quote, req.params.id], function(err, data) {
    console.log("after query");
    if(err) {
      // console.log("delete error" + err);
      return res.status(500).end();
    }
    res.status(200).end();
  });
});

app.delete("/todos/:id", function(req, res){
  // console.log("in delete");
  // console.log("current id " + req.params.id);
  connection.query("DELETE FROM quotes WHERE id=?", [req.params.id], function(err, data) {
    // console.log("after query");
    if(err) {
      // console.log("delete error" + err);
      return res.status(500).end();
    }
    res.status(200).end();
  });
});


app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
