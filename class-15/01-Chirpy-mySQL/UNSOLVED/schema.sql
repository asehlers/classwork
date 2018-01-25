CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  id  INTEGER(11) NOT NULL AUTO_INCREMENT,
  author VARCHAR(128), 
  chirp VARCHAR(140),
  timeCreated TIMESTAMP,
  PRIMARY KEY(id)

);