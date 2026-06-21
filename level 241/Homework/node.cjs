const express = require('express');
const app = express();
app.use(express.json());

let todos = ["Learn JS", "Go to gym", "Build a project"];

app.get('/random', (req, res) => {
  if (todos.length === 0) return res.send("No todos");
  const random = todos[Math.floor(Math.random() * todos.length)];
  res.send(random);
});

app.get('/todos', (req, res) => {
  if (todos.length === 0) return res.send("No todos");
  res.send(todos.join(", "));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
