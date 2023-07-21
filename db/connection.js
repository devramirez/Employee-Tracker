// Connects JavaScript and Sequelize
const sequelize = require("sequelize");
require("dotenv").config();
const inquirer = require("inquirer");
const mysql = require("mysql2");

// let sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         host: "localhost",
//         dialect: "mysql",
//         port: 3306,
//     }
// );

// create MySQL connection
const db_connection = mysql.createConnection({
    host:"localhost",
    port: 3001,
    user: "root",
    password: "mySQL0629$%",
    database: "employee_tracker_db"
})
module.exports = db_connection;