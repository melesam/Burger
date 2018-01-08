

CREATE DATABASE burgers_db;
USE burgers_db;



CREATE TABLE burgers
(
id integer auto_increment not null,
burger_name varchar(20) not null,
devoured boolean default false,
date timestamp,
PRIMARY KEY (id)

);