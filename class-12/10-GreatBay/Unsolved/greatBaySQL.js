var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "GreatBay_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readItems();
  // createItem("ferret", "3000");
  // updateItem(5, 5000);
  // getPrice(5);
  // deleteItem(5);
  readItems();
  exitDB();
});

function createItem(newName, newPrice) {
  console.log("Inserting a new Item\n");
  var query = connection.query(
    "INSERT INTO item SET ?",
    {
      name: newName,
      price: newPrice
    },
    function(err, res) {
      console.log(res.affectedRows + " Item inserted!\n");
      // Call updateItem AFTER the INSERT completes
      // updateItem();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updateItem(itemID, newPrice) {
  console.log("Updating all Rocky Road quantities...\n");
  var query = connection.query(
    "UPDATE item SET ? WHERE ?",
    [
      {
        price: newPrice
      },
      {
        id: itemID
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " Items updated!\n");
      // Call deleteItem AFTER the UPDATE completes
      // deleteItem();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteItem(item) {
  console.log("Deleting Item");
  connection.query(
    "DELETE FROM item WHERE ?",
    {
      id: item
    },
    function(err, res) {
      console.log(res.affectedRows + " Items deleted!\n");
      // Call readItems AFTER the DELETE completes
      // readItems();
    }
  );
}

function readItems() {
  console.log("Selecting all Items...\n");
  connection.query("SELECT * FROM item", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    for(var i = 0; i < res.length; i ++){
      console.log(res[i].id+ ") " + res[i].name);
    }
    return res;
    // connection.end();
  });
}

function exitDB(){
  connection.end();
}

function getPrice(id){

  console.log("getting price!");

  var query = connection.query(
    "SELECT * FROM item WHERE ? ",
    {
      id: id
    },

    function(err, res) {
      if(err) throw err;
      console.log(`Price: ${res[0].price}`);
      return res[0].price;
    });
}