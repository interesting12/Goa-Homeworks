const express = require("express");

const app = express();

app.use(express.json());

let todos = [
  {
    id: 1,
    text: "Learn Express"
  }
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found"
    });
  }

  todo.text = req.body.text;

  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  todos = todos.filter(todo => todo.id !== id);

  res.json({
    message: "Todo deleted"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});