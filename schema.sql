DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department(
    id INT auto_increment,
    name VARCHAR(30),
    PRIMARY KEY (id)

);


CREATE TABLE role (
    id INT auto_increment,
    title VARCHAR(30),
    salary DECIMAL(5,4) NOT NULL,
    department_id INT,
    PRIMARY KEY (id)

);


CREATE TABLE employee (
        id INT auto_increment,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        role_id INT, 
        manager_id INT,
        PRIMARY KEY(id)


);


