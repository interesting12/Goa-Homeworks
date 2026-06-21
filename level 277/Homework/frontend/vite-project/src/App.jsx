import { useEffect, useState } from "react";

const API = "http://localhost:3000";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");


  const loadTasks = async () => {
    try {
      const res = await fetch(`${API}/tasks`);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.log("Error loading tasks:", err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);


  const addTask = async () => {
  console.log("ADD CLICKED");

  if (!input.trim()) return;

  const res = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: input })
  });

  console.log(await res.text());

  setInput("");
  loadTasks();
};


  const completeTask = async (id) => {
    try {
      await fetch(`${API}/tasks/${id}/complete`, {
        method: "PATCH",
      });

      loadTasks();
    } catch (err) {
      console.log("Error completing task:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${API}/tasks/${id}`, {
        method: "DELETE",
      });

      loadTasks();
    } catch (err) {
      console.log("Error deleting task:", err);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Todo App</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={addTask}>Add</button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((t) => (
          <li key={t.id} style={{ marginBottom: "10px" }}>
            <span
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {t.title}
            </span>

            <button onClick={() => completeTask(t.id)}>✔</button>
            <button onClick={() => deleteTask(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;