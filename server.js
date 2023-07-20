const inquirer = require("inquirer");
const mysql = require("mysql2");

// create MySQL connection
const connection = mysql.createConnection({
    host:"localhost",
    port: 3002,
    user: "root",
    password: "",
})