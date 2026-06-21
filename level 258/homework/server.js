const express = require('express');
const Database = require('better-sqlite3');

const app = express();
app.use(express.json());

const db = new Database('database.db');

db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    price INTEGER
  )
`).run();

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const result = db.prepare(
    'INSERT INTO users (name, email) VALUES (?, ?)'
  ).run(name, email);
  res.json({ id: result.lastInsertRowid, name, email });
});

app.get('/users', (req, res) => {
  const users = db.prepare('SELECT * FROM users').all();
  res.json(users);
});

app.post('/products', (req, res) => {
  const { title, price } = req.body;
  const result = db.prepare(
    'INSERT INTO products (title, price) VALUES (?, ?)'
  ).run(title, price);
  res.json({ id: result.lastInsertRowid, title, price });
});

app.get('/products', (req, res) => {
  const products = db.prepare('SELECT * FROM products').all();
  res.json(products);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
