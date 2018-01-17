var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "popquiz"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  printRows();
});

function printRows(){
  connection.query("SELECT * FROM quizTable", function(err, res)
  {
    if(err) throw err;
    for(var i = 0; i < res.length; i++)
    {
      console.log("ID: " + res[i].id + "  Text: " + res[i].pop_quiz_text);
    }
  })
}

