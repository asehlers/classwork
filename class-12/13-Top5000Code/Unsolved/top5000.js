var mysql = require("mysql");

var connection = mysql.createConnection(
{
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "top_songsDB"
});

connection.connect(function(err)
{
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  // getByArtist("The Beatles");
  getArtistByMultiple();
  // getByRange(5, 10);
  // getBySongName("Take Good Care of My Baby");
});

function printRows(res)
{
    for(var i = 0; i < res.length; i++)
    {
      console.log("Rank: " + res[i].rank +" Artist: " + res[i].artist_name + "  Name: " + res[i].song_name);
    }
    closeConnection();
}

function getByArtist(artistName)
{
  connection.query("SELECT * FROM Top5000 WHERE ?",
    [
      {
        artist_name:artistName
      }
    ], function(err, res)
    {
      // console.log(res);
      printRows(res);
      return res;
    });
}

function getArtistByMultiple()
{
  connection.query("SELECT artist_name,count(artist_name) AS NumOccurrences FROM Top5000 GROUP BY artist_name HAVING ( COUNT(artist_name) > 1 )", function(err, res)
  {
    if(err) throw err;
    // console.log(res);
    for(var i = 0; i < res.length; i++)
    {
      console.log("Artist: " + res[i].artist_name);
    }
    closeConnection();
    return res;
  });
}

function getByRange(low, high)
{
  connection.query("SELECT * FROM Top5000 WHERE rank BETWEEN "+low+" AND "+high ,function(err, res)
  {
    if(err) throw err;
    // console.log(res);
    printRows(res);
    return res;
  });
}

function getBySongName(songName)
{
  connection.query("SELECT * FROM Top5000 WHERE song_name=\""+songName+"\"", function(err, res)
  {
    if(err) throw err;
    console.log(res);
    printRows(res);
    return res;
  });
}

function closeConnection(
  ){
  connection.end();
}