const sequelize = require('./config/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');


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
    .then((answers) => {
        const {choices} = answers;

        if (choices === 'View all departments') {
            viewAllDepartments();
        }
    })
};


const viewAllDepartments = () => {
    [ sequelize.literal('SELECT department.id AS id, department.name AS department FROM department') ]
};


promptUser();
sequelize.sync({ force: false });
