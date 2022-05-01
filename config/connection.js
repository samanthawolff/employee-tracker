// Import the sequilize constructor from the library
const mysql = require('mysql2');

// require('./env').config();

// Create connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1245Sammi',
    database: 'employees'
});
    

module.exports = connection;