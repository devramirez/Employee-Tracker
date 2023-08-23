// Linking SQL2, Inquirer, and Console Table to script file
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("dotenv").config();
// const cTable = require('console.table');

// Create MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mySQL0629$%",
  database: "company_db",
});

// connection to database options with banner
connection.connect((err) => {
  if (err) throw err;
  console.log("Welcome to Employee Tracker");
  startApp();
});

// Start application with prompts
const startApp = () => {
  // options in employee tracker menu
  inquirer
    .prompt({
      message: "Please choose one of the following:",
      name: "menu",
      type: "list",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Delete a department",
        "Delete a role",
        "Delete an employee",
        "Exit",
      ],
    })

    // Response based on action select using if statement that engages corresponding function
    .then((response) => {
      if (response.menu === "View all departments") {
        viewAllDepartments();
      } else if (response.menu === "View all roles") {
        viewAllRoles();
      } else if (response.menu === "View all employees") {
        viewAllEmployees();
      } else if (response.menu === "Add a department") {
        addDepartment();
      } else if (response.menu === "Add a role") {
        addRole();
      } else if (response.menu === "Add an employee") {
        addEmployee();
      } else if (response.menu === "Update an employee role") {
        updateEmployeeRole();
      } else if (response.menu === "Delete a department") {
        deleteDepartment();
      } else if (response.menu === "Delete a role") {
        deleteRole();
      } else if (response.menu === "Delete an employee") {
        deleteEmployee();
      } else {
        connection.end();
      }
    });
    
}; 
