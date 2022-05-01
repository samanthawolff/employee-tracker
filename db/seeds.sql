INSERT INTO department (name)
VALUES 
    ('Human-Resources'), 
    ('Accounting'), 
    ('Sales'), 
    ('Reception'), 
    ('Legal');


INSERT INTO role (title, salary, department_id)
VALUES 
    ('HR-Rep', 50000, 1), 
    ('Accountant', 55000, 2), 
    ('Sales-Rep', 62000, 3), 
    ('Receptionist', 30000, 4), 
    ('Lawyer', 90000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('John', 'Doe', 3, 1),
    ('Jane', 'Doe', 4, 1),
    ('Prea', 'Madonna', 1, null),
    ('David', 'Frankfurt', 2, 1),
    ('Missy', 'Morgan', 4, null),
    ('Spencer', 'Nohavitza', 5, 1),
    ('Matthew', 'Long', 5, null),
    ('Chapel', 'Karot', 1, null);
    