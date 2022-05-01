const connection = require('./config/connection');
const inquirer = require('inquirer');
const consoleTable = require('connection.table');

connection.connect((error) => {
    if (error) throw error;
    console.log('Database Connected!');
});