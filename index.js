// importing modules/dependencies required
const express = require("express");
const mysql = require("mysql");
// const sequelize = require("sequelize")
const db = require("./db/connection");
const { default: inquirer } = require("inquirer");

// create bridge between nodejs & mysql
// create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mySQL0629$%",
    database: "employee_tracker_db",
});

// connect to MySQL
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("MySQL Connected")
    employee_tracker();
});

const employee_tracker = function() {
    inquirer.prompt([{
        // starting prompt
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit']
    }]).then((answers) => {
        // points to department table in db
        if (answers.prompt === 'View All Departments') {
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) throw err;
                console.log('Viewing All Departments: ');
                console.table(result);
                employee_tracker();
            })
        }
    })
}
