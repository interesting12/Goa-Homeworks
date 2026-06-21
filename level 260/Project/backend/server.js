const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = new Database('database.db');

db.prepare(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstName TEXT,
  lastName TEXT,
  age INTEGER,
  email TEXT UNIQUE,
  phone TEXT,
  password TEXT
)
`).run();

app.post('/register', (req, res) => {
  const { firstName, lastName, age, email, phone, password } = req.body;

  if (!firstName || !email || !password) {
    return res.status(400).json({ success: false, message: 'Required fields missing' });
  }

  try {
    const result = db.prepare(`
      INSERT INTO users (firstName, lastName, age, email, phone, password)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(firstName, lastName, age, email, phone, password);

    res.json({ success: true, userId: result.lastInsertRowid });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.get('/users', (req, res) => {
  const users = db.prepare(`
    SELECT id, firstName, lastName, age, email, phone FROM users
  `).all();
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
