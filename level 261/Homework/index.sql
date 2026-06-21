-- 1) SELECT clause
--  განსაზღვრავს, რომელი სვეტები ან  მნიშვნელობები უნდა დაბრუნდეს. მოვალეობა: მონაცემების ამოღება.
SELECT name, age FROM users;


-- 2) FROM clause
-- მიუთითებს, რომელი ცხრილიდან ვიღებთ მონაცემებს. 
SELECT * FROM orders;


-- 3) WHERE clause
--ფილტრავს ჩანაწერებს მოცემული პირობის მიხედვით. 
SELECT * FROM users WHERE age >= 18;


-- 4) ORDER BY clause
--არეგულირებს შედეგების დალაგების წესს. მოვალეობა: მონაცემების სორტირება.
SELECT * FROM products ORDER BY price DESC;


-- 5) GROUP BY clause
-- აჯგუფებს ერთნაირი მნიშვნელობის მიხედვით.
SELECT country, FROM users GROUP BY country;


-- 6) DISTINCT clause
-- შლის დუბლირებულ მნიშვნელობებს. მოვალეობა: უნიკალური მონაცემების მიღება.
SELECT DISTINCT country FROM users;


--7)Like clause
--გამოიყენება ტექსტური მნიშვნელობების ნაწილობრივი დამთხვევის მოსაძებნად.
SELECT * FROM users WHERE name LIKE 'G%';

