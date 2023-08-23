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

  // Function to show all departments in database
  const viewAllDepartments = () => {
    // Use connection,query to engage SQL command that usually is physcially typed out in command line
    connection.query("SELECT * FROM department", function (err, res) {
      if (err) throw err;
      // console.table displays tables based on response from connection.query
      console.table(res);
      startApp();
    });
  };

  // Function to view all roles within database
const viewAllRoles = () => {
  // The single letters represent the first letter of each table within seeds.sql. This is then connected to the corresponding label issued in the schema.sql file to display that selected data.
  // This pulls from the employee table and joins the role table and department table data to it
    connection.query(`SELECT 
     r.id,
     r.title,
     d.name AS department,
     r.salary
     FROM role r
     JOIN department d ON r.department_id = d.id`, 
     (err, res) => {
        if (err) throw err;
        console.table(res);
        startApp();
    });
};
};
