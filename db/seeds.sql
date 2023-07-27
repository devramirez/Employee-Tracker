-- Insert names of departments into table of department
INSERT INTO department
(name)
VALUES
('Engineering'),
('Sales'),
('Accounting'),
('Legal');

-- Insert roles of employees into table employee
INSERT INTO role
(title, salary, department_id)
VALUES
('Software Engineer', 120000, 1),
('Sales Specialist', 75000, 2),
('Accountant', 125000, 3),
('Counselor', 175000, 4);

-- Insert employee information into table employee
INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Andrew', 'Ramirez', 1, 2),
('Alejandro', 'Calzada', 2, 3),
('Santiago', 'Hernandez', 3, 4),
('Sofia', 'Campos', 1, 4);