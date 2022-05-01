// Import the sequilize constructor from the library
const mysql = require('mysql2');

require('dotenv').config();

// Create connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PW,
    database: 'employees'
});
    

module.exports = connection;