const inquirer = require("inquirer");
const express = require("express");
const app = express();
const PORT = 3000;
const consoleTable = require("console.table");

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootuser",
  database: "company_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

let initChoice = [
  "Add Department, role or employee",
  "view departments roles, or employees",
  "Update employee role",
];

inquirer
  .prompt([
    {
      type: "list",
      message: "What do you want to do?",
      choices: initChoice,
      name: "init",
    },
  ])
  .then((answers) => {
    if (answers.init == initChoice[0]) {
      inquirer
        .prompt([
          {
            type: "list",
            message: "What would you like to add?",
            choices: ["Department", "Role", "Employee"],
            name: "add",
          },
        ])
        .then((answers) => {
          if (answers.add == "Department") {
            inquirer
              .prompt([
                {
                  type: "input",
                  message: "What is the name of the department?",
                  name: "addept",
                },
              ])
              .then((answers) => {
                connection.query(
                  `INSERT INTO department (name) VALUES ('${answers.addept}')`
                );
                console.log("department added");
              });
          } else if (answers.add == "Role") {
            inquirer
              .prompt([
                {
                  type: "input",
                  message: "What is the name of the role?",
                  name: "addrole",
                },
              ])
              .then((answers) => {
                connection.query(
                  `INSERT INTO role (title) VALUES ('${answers.addrole}')`
                );
                console.log("role added");
              });
          } else {
            inquirer
              .prompt([
                {
                  type: "input",
                  message: "What is the employee's first name?",
                  name: "firstname",
                },
                {
                  type: "input",
                  message: "what is the employee's last name",
                  name: "lastname",
                },
              ])
              .then((answers) => {
                connection.query(
                  `INSERT INTO employee (first_name, last_name) VALUES ('${answers.firstname}', '${answers.lastname}')`
                );
                console.log("Employee added");
              });
          }
        });
    } else if (answers.init == initChoice[1]){
        inquirer.prompt([
            {type: 'list',
            message: 'What would you like to view?',
            choices: ['Department', 'Role', 'employees'],
            name: 'view'
            }
        ]).then(answers => {
            if (answers.view == 'Department'){
                connection.query(`SELECT * FROM department`)
            } else if (answers.view == 'Role'){
                console.log('role')
            } else {
                console.log('employees')
            }
        })
    }

      
    
    
    
    
    
    
    
app.listen(PORT, () => {
          console.log(`listening at http://localhost:${PORT}`)
      
        }
  
)})