const connection = require('./config/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');


connection.connect((error) => {
    if (error) throw error;
    console.log('Database Connected!');
});

const promptUser = () => {
    return inquirer.prompt([

        {
            type: 'list',
            name: 'userChoices',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role'
            ]
        }
    ])
};

promptUser();
