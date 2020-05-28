/* Schema for SQL database */
DROP DATABASE IF EXISTS linkedout_db;

/* Create database */
CREATE DATABASE linkedout_db;
USE linkedout_db;

/* Create new table for employers with a primary key that auto-increments */
CREATE TABLE employers(
  id INTEGER(100) AUTO_INCREMENT NOT NULL,
  name VARCHAR(200),
  about TEXT(500),
  address VARCHAR(250),
  phone VARCHAR(20),
  email VARCHAR (100),
  pwd VARCHAR(50),
  PRIMARY KEY (id)
);

/* Create new table for jobs with a primary key that auto-increments, and a Foreign Key */
CREATE TABLE jobs(
  id INTEGER(10) AUTO_INCREMENT NOT NULL,
  title VARCHAR(100),
  skills VARCHAR(200),
  PRIMARY KEY (id)
);

/* Create new table for employees with a primary key that auto-increments, and multiple Foreign Keys */
CREATE TABLE employees(
  id INTEGER(10) AUTO_INCREMENT NOT NULL,
  job_id INTEGER(10),
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  email VARCHAR (100),
  pwd VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (job_id) REFERENCES jobs(id)
);


/* Create new table for job ads with a primary key that auto-increments, and multiple Foreign Keys */
CREATE TABLE jobAds(
  id INTEGER(10) AUTO_INCREMENT NOT NULL,
  job_id INTEGER(10),
  emp_id INTEGER(100),
  status BOOLEAN,
  PRIMARY KEY (id),
  FOREIGN KEY (job_id) REFERENCES jobs(id),
  FOREIGN KEY (emp_id) REFERENCES employers(id)
);

