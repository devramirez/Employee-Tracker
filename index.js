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
    if (err) {
        throw err;
    }
    console.log("MySQL Connected")
    employee_tracker();
});
// Function to ask user to choose from list of choices using inquirer
const employee_tracker = function () {
    inquirer.prompt([{
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit']
    }]).then((answers) => {
        // takes in user response and points to designated table in db
        // error checker in place for all roles
        if (answers.prompt === 'View All Departments') {
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) throw err;
                console.log('Viewing All Departments: ');
                console.table(result);
                employee_tracker();
            }); // adding roles
        } else if (answers.prompt === 'View All Roles') {
            db.query(`SELECT * FROM role`, (err, result) => {
                if (err) throw err;
                console.log("Viewing All Roles: ");
                console.table(result);
                employee_tracker();
            }); // adding employees
        } else if (answers.prompt === 'View All Employees') {
            db.query(`SELECT * FROM employee`, (err, result) => {
                if (err) throw err;
                console.log("Viewing All Employees: ");
                console.table(result);
                employee_tracker();
            }); // adding departments
        } else if (answers.prompt === 'Add a Department') {
            inquirer.prompt([{
                // adding a department to table
                type: 'input',
                name: 'department',
                message: 'What is the name of the department?',
                validate: departmentInput => {
                    if (departmentInput) {
                        return true;
                    } else {
                        console.log('Please Add a Department!');
                        return false;
                    }
                }
            }]).then((answers) => {
                db.query(`INSERT INTO department (name) VALUES (?)`, [answers.department], (err, result) => {
                    if (err) throw err;
                    console.log(`Added ${answers.department} to the database.`)
                    employee_tracker();
                });
            }) // adding a role to table
        } else if (answers.prompt === 'Add a role') {
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) throw err;
                inquirer.prompt([
                    {
                        // adding a role
                        type: 'input',
                        name: 'role',
                        message: 'What is the role?',
                        validate: roleInput => {
                            if (roleInput) {
                                return true;
                            } else {
                                console.log('Please enter a role!');
                                return false;
                            }
                        }
                    },
                    {
                        // adding salary info
                        type: 'input',
                        name: 'salary',
                        message: 'What is the salary for the role?',
                        validate: salaryInput => {
                            if (salaryInput) {
                                return true;
                            } else {
                                console.log("Please enter a salary for the role!")
                                return false;
                            }
                        }
                    },
                    {
                        // adding a department
                        type: 'list',
                        name: 'department',
                        message: 'What is the department for this role?',
                        choices: () => {
                            let array = [];
                            for (let i = 0; i < result.length; i++) {
                                array.push(result[i].name);
                                return array;
                            }
                        }
                    }
                ]).then((answers) => {
                    // compare the result & store into variable
                    for (let i = 0; i < result.length; i++) {
                        const department = result[i];
                    }
                })
                db.query(`INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`, [answers.role, answers.salary, answers.department.id], (err, result) => {
                    if (err) throw err;
                    console.log(`Added ${answers.role} to the database.`)
                    employee_tracker();
                });
            });
        }
    }
    )
}
