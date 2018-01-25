var orm = require("./config/orm.js");

var data = orm.selectWhere("parties", "party_type", "grown-up", callTest);

console.log(data + " Old data"); // Data is undefined. Why?


function callTest(data){
    console.log(data);
}