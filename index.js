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
    .then(answers => {
        

        if (answers.userChoices === 'View all departments') {
            viewAllDepartments();
        }
    })
};


const viewAllDepartments = () => {
   
   console.log('testing 123!');
    /* const sql = `SELECT department.id AS id, department.name AS department FROM department`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        res.json({
            message: 'success',
            data: rows
        })
    }) */ 
};


promptUser();
sequelize.sync({ force: false });
