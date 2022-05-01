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
    console.log('+-------------------------------------------------+');
    console.log('|             Viewing All Departments             |');
    console.log('+-------------------------------------------------+');

    const sql = `SELECT department.name AS department FROM department`;

    connection.query(sql, (error, response) => {
        if(error) throw error;
        console.log('Response: ', response);
        promptUser();
    });

    /* console.table([
       {
           Departments: 'Human-Resources'
       },
       {
           Departments: 'Accounting'
       },
       {
           Departments: 'Sales'
       },
       {
           Departments: 'Reception'
       },
       {
           Departments: 'Legal'
       }
    ]);
    promptUser(); */
};


// View all Roles
const viewAllRoles = () => {
    console.log('+-------------------------------------------+');
    console.log('|             Viewing All Roles             |');
    console.log('+-------------------------------------------+');

    console.table([
        {
            Role: 'HR-Rep',
            Salary: 50000,
            DepartmentId: 1
        },
        {
            Role: 'Accountant',
            Salary: 55000,
            DepartmentId: 2
        },
        {
            Role: 'Sales-Rep',
            Salary: 62000,
            DepartmentId: 3
        },
        {
            Role: 'Receptionist',
            Salary: 30000,
            DepartmentId: 4
        },
        {
            Role: 'Lawyer',
            Salary: 90000,
            DepartmentId: 5
        }
    ]);
    promptUser();
};


// View all Employees
const viewAllEmployees = () => {
    console.log('+-----------------------------------------------+');
    console.log('|             Viewing All Employees             |');
    console.log('+-----------------------------------------------+');

    console.table([
        {
            FirstName: 'John',
            LastName: 'Doe',
            RoleId: 3,
            ManagerId: 1
        },
        {
            FirstName: 'Jane',
            LastName: 'Doe',
            RoleId: 3,
            ManagerId: 1
        },
        {
            FirstName: 'Prea',
            LastName: 'Madonna',
            RoleId: 1,
            ManagerId: null
        },
        {
            FirstName: 'David',
            LastName: 'Frankfurt',
            RoleId: 2,
            ManagerId: 1
        },
        {
            FirstName: 'Missy',
            LastName: 'Morgan',
            RoleId: 4,
            ManagerId: null
        },
        {
            FirstName: 'Spencer',
            LastName: 'Nohavitza',
            RoleId: 5,
            ManagerId: 1
        },
        {
            FirstName: 'Matthew',
            LastName: 'Long',
            RoleId: 5,
            ManagerId: null
        },
        {
            FirstName: 'Chapel',
            LastName: 'Karot',
            RoleId: 1,
            ManagerId: null
        }
    ]);
    promptUser();
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




