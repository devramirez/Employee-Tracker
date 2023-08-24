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
    // This pulls from the employee table and joins the role table and department table data to it
    connection.query(
      `SELECT 
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
      }
    );
  };

// Function to show all employees
const viewAllEmployees = () => {
  // Similar to viewAllRoles, this function uses SQL commands to display select data and joins tables together into a cohesive table display
  connection.query(
    `
    SELECT 
      e.id, 
      e.first_name, 
      e.last_name, 
      r.title, 
      d.name AS department, 
      r.salary, 
      CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee e
    JOIN role r ON e.role_id = r.id
    JOIN department d ON r.department_id = d.id
    LEFT JOIN employee m ON e.manager_id = m.id
  `,
    (err, res) => {
      if (err) throw err;
      console.table(res);
      startApp();
    }
  );
};

// Function to add a role
const addRole = () => {
    connection.query('SELECT id, name FROM department', (err, res) => {
        if (err) throw err;

        const departmentNames = res.reduce((acc, curr) => {
            acc[curr.name] = curr.id;
            return acc;
        }, {});
    
   inquirer.prompt([
    {
        name: 'role',
        type: 'input',
        message: 'Please enter your role in the company.'
    },
    {
        name: 'salary',
        type: 'input',
        message: 'Please enter your salary.'
    },
    {
        name: 'department',
        type: 'list',
        message: 'Please select which department your role is in.',
        // Pulls from object to display department names in seeds.sql table
        choices: Object.keys(departmentNames),
    }
   ]).then(answer => {
    const departmentID = departmentNames[answer.department];
        connection.query(
                'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
                [answer.role, answer.salary, departmentID],
                function (err, res) {
                    if (err) throw err;
                    console.log('Role added!');
                    startApp();
                }
            );
        })
    });
};

};