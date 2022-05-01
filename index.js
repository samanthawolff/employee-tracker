// List of dependencies 
const sequelize = require('./config/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');


// User prompts / starting menu 
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
    // Taking user input and pushing it towards function to handle mysql table viewing/creation/updating
    .then(answers => {
        
        if (answers.userChoices === 'View all departments') {
            viewAllDepartments();
        };

        if (answers.userChoices === 'View all roles') {
            viewAllRoles();
        };

        if(answers.userChoices === 'View all employees') {
            viewAllEmployees();
        };

        if(answers.userChoices === 'Add a department') {
            addDepartment();
        };

        if(answers.userChoices === 'Add a role') {
            addRole();
        };

        if(answers.userChoices === 'Add an employee') {
            addEmployee();
        };

        if(answers.userChoices === 'Update an employee role') {
            updateEmployee();
        };
    })
};


// View all Departments 
const viewAllDepartments = () => {
   console.log('test view departments');
    /* const sql = `SELECT department.id AS id, department.name AS department FROM department`;
    sequilize.query(sql, (err, rows) => {
        if (err) throw err;
        res.json({
            message: 'success',
            data: rows
        })
    }) */
};


// View all Roles
const viewAllRoles = () => {
    console.log('test view roles');
};


// View all Employees
const viewAllEmployees = () => {
    console.log('test view employees');
};


// Add a Department
const addDepartment = () => {
    console.log('test add department');
};


// Add a Role
const addRole = () => {
    console.log('test add role');
};


// Add an Employee
const addEmployee = () => {
    console.log('test add employee');
};


// Update an Enployee Role
const updateEmployee = () => {
    console.log('test update employee');
};


// Call promptUser() function 
promptUser();

// Turn on connection to database
sequelize.sync({ force: false });
