-- Department table and corresponding values
INSERT INTO department (name)
VALUES  ("Engineering"),
        ("Sales"),
        ("Accounting"),
        ("Finance"),
        ("Legal");
        

-- Role table and corresponding values
INSERT INTO role (title, salary, department_id)
VALUES  ("Software Engineer", 130000, 1),
        ("Staff Engineer", 160000, 1),
        ("Sales Associate", 80000, 2),
        ("Sales Lead", 100000, 2),
        ("Accountant", 125000, 3),
        ("Account Manager", 45000, 3),
        ("Financial Analyst", 115000, 4),
        ("Attorney", 155000, 5);

-- Employee table and corresponding values
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Andrew", "Ramirez", 1, 1),
        ("John", "Snow", 2, NULL),
        ("Mike", "Chan", 3, 2),
        ("Kevin", "De Bruyne", 4, NULL),
        ("Lionel", "Messi", 5, NULL),
        ("Erling", "Haaland", 6, NULL),
        ("Alejandro", "Calzada", 7, 1),
        ("Manuel", "Ramirez", 8, 2);
        