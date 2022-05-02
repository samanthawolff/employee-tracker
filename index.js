// List of dependencies 
const connection = require('./config/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require('mysql2');



connection.connect(err => {
    if (err) throw err;
    console.log('connected');
    promptUser();
})


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
                'Update an employee role',
                'Exit Menu'
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

        if(answers.userChoices === 'Exit Menu') {
            connection.end()
        };
    })
};


// View all Departments 
const viewAllDepartments = () => {
    console.log('+-------------------------------------------------+');
    console.log('|             Viewing All Departments             |');
    console.log('+-------------------------------------------------+');

    const sql = `SELECT department.id AS ID, department.name AS Department FROM department`;

    connection.query(sql, (error, response) => {
        if(error) throw error;
        console.table(response);
        promptUser();
    });
};


// View all Roles
const viewAllRoles = () => {
    console.log('+-------------------------------------------+');
    console.log('|             Viewing All Roles             |');
    console.log('+-------------------------------------------+');

    const sql = `SELECT role.id AS ID, role.title AS Title, role.salary AS Salary, role.department_id AS Department 
                 FROM role
                 INNER JOIN department ON role.department_id = department_id`;

    connection.query(sql, (error, response) => {
        if(error) throw error;
        console.table(response);
        promptUser();
    });
};


// View all Employees
const viewAllEmployees = () => {
    console.log('+-----------------------------------------------+');
    console.log('|             Viewing All Employees             |');
    console.log('+-----------------------------------------------+');

    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, 
                 CONCAT (manager.first_name, " ", manager.last_name) AS manager 
                 FROM employee 
                 LEFT JOIN role ON employee.role_id = role.id 
                 LEFT JOIN department ON role.department_id = department.id 
                 LEFT JOIN employee manager ON employee.manager_id = manager.id`;

    connection.query(sql, (error, response) => {
        if(error) throw error;
        console.table(response);
        promptUser()
    })
};


// Add a Department
const addDepartment = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'newDepartment',
            message: 'What is the name of your new department?',
            validate: newDepartmentInput => {
                if (newDepartmentInput) {
                    return true;
                } else {
                    console.log('Please enter the new departments name!');
                    return false;
                };
            }
        }
    ])
    .then((answer) => {
        const sql = `INSERT INTO department (name) 
                     VALUES (?)`;
        
        connection.query(sql, answer.newDepartment, (error, response) => {
            if(error) throw error;
            console.table(answer.newDepartment);
            viewAllDepartments();
        });
    });
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




