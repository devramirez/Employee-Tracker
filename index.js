// importing modules
const express = require("express");
const mysql = require("mysql");

// create bridge between nodejs & mysql
// create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mySQL0629$%",
    database: "nodemysql",
});
