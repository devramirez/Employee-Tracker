-- Department table and corresponding values
INSERT INTO department (name)
VALUES ("Engineering"),
        ("Sales"),
        ("Accounting"),
        ("Finance"),
        ("Legal"),
        ("Quality Assurance");
        

-- Role table and corresponding values
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 130000, 1),
        ("Staff Engineer", 160000, 1),
        ("Sales Associate", 80000, 2),
        ("Accountant", 125000, 3),
        ("Financial Analyst", 115000, 4),
        ("Attorney", 155000, 5),
        ("QA Engineer", 75000, 6),
        ("Account Manager", 45000, 3),
        ("Sales Lead", 100000, 2);

-- Employee table and corresponding values
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andrew", "Ramirez", 1, 1),
        ("John", "Snow", 3, NULL),
        ("Mike", "Chan", 2, 2),
        ("Stanley", "Hudson", 3, 2),
        ("Kevin", "De Bruyne", 3, NULL),
        ("Alejandro", "Calzada", 4, 1),
        ("Manuel", "Ramirez", 4, NULL),
        ("Cristiano", "Ronaldo", 4, 3),
        ("Lionel", "Messi", 5, NULL),
        ("Erling", "Haaland", 6, 3),
        ("Robert", "Lewandowski", 7, NULL),
        ("Andres", "Iniesta", 8, NULL),
        ("Xavi", "Hernandez", 8, 1);