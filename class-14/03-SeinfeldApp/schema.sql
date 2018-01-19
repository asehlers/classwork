-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "schools" 
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points INTEGER(10),
  attitude varchar(30),
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Jerry", -10, "sarcastic");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Kramer", 8999, "crazy");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("George", 9, "scared");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Elaine", 5, "offended");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Newman", 0, "crazy");

