CREATE VIEW ny_employees AS
SELECT *
FROM employees
WHERE department_id IN (
    SELECT id
    FROM departments
    WHERE location = 'New York'
);




CREATE VIEW goa_employees AS
SELECT *
FROM employees
WHERE department_id = 5

SELECT *
FROM goa_employees
WHERE salary = (
    SELECT MAX(salary)
    FROM goa_employees
)