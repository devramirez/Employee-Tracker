// importing modules
const express = require("express");
const mysql = require("mysql");
const sequelize = require("sequelize")

// create bridge between nodejs & mysql
// create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mySQL0629$%",
    database: "nodemysql",
});

// connect to MySQL
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("MySQL Connected")
});
