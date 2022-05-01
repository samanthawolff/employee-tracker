// Import the sequilize constructor from the library
const Sequelize = require('sequelize');


// require('dotenv').config();


// Create connection to database
const sequelize = new Sequelize({
    host: 'localhost',
    user: 'root',
    password: '1245Sammi',
    dialect: 'mysql',
    port: 3306
});
    

module.exports = sequelize;