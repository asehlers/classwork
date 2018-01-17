DROP DATABASE IF EXISTS popquiz;

CREATE DATABASE popquiz;

USE popquiz;

CREATE TABLE quizTable (
  id INT NOT NULL AUTO_INCREMENT,
  pop_quiz_text VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO quizTable (pop_quiz_text)
VALUES ("Table Entry 1");

INSERT INTO quizTable (pop_quiz_text)
VALUES ("Table Entry 2");

INSERT INTO quizTable (pop_quiz_text)
VALUES ("Table Entry 3");


