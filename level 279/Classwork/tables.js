const Database = require('better-sqlite3');
const db = new Database('user.db');
db.exec(`
    CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT,
    age INTEGER
);

`);

db.exec(`
   CREATE TRIGGER IF NOT EXISTS check_age
   BEFORE INSERT ON users
   WHEN NEW.age < 18
`);

db.exec(`
CREATE TABLE IF NOT EXISTS logs(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT
);
CREATE TRIGGER IF NOT EXISTS after_register
AFTER INSERT ON users
BEGIN
    INSERT INTO logs(message)
    VALUES ('new user registered');
END;
    
`);

db.exec(`
CREATE TRIGGER IF NOT EXISTS email_update 
AFTER UPDATE OF EMAIL ON users
BEGIN
    INSERT INTO logs(message)
    VALUES ('user email updated');
END
`);

db.prepare(`
INSERT INTO users(username, email, age)
VALUES (?, ?, ?)
`).run("giorgi", "shavadze@gmail.com", 17);

db.prepare(`
UPDATE users 
SET email = ?
WHERE id = ?
`).run("giorgi@gmail.com", 1);

console.log(`
    db.prepare(SELECT * FROM logs).all()
`);