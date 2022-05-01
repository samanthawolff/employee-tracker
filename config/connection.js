// Import the sequilize constructor from the library
const Sequilize = require('sequilize');

require('dotenv').config();

// Create connection to database
const sequilize = new Sequilize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequilize;