const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());


app.post('/tasks', (req, res) => {
  try {
    console.log("BODY:", req.body);

    const stmt = db.prepare("INSERT INTO tasks (title) VALUES (?)");
    stmt.run(req.body.title);

    res.json({ ok: true });
  } catch (err) {
    console.log("ERROR:", err); // 👈 ეს დაგანახებს რეალურ მიზეზს
    res.status(500).json({ error: err.message });
  }
});

app.get('/tasks', (req, res) => {
    const tasks = db.prepare("SELECT * FROM tasks").all();
    res.json(tasks);
});

app.put('/tasks/:id', (req, res) => {
    const { title } = req.body;
    db.prepare("UPDATE tasks SET title = ? WHERE id = ?")
      .run(title, req.params.id);
    res.send("Updated");
});

app.patch('/tasks/:id/complete', (req, res) => {
    db.prepare("UPDATE tasks SET completed = 1 WHERE id = ?")
      .run(req.params.id);
    res.send("Completed");
});

app.delete('/tasks/:id', (req, res) => {
    db.prepare("DELETE FROM tasks WHERE id = ?")
      .run(req.params.id);
    res.send("Deleted");
});

app.get('/history', (req, res) => {
    const history = db.prepare("SELECT * FROM history").all();
    res.json(history);
});

app.listen(3000, () => console.log("Server running on 3000"));