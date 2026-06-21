const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let todos = [
    "Complete homework assignment",
    "Buy groceries",
    "Call the doctor",
    "Pay electricity bill",
    "Read a book",
    "Exercise for 30 minutes",
    "Plan weekend trip"
];

app.get('/random', (req, res) => {
    if (todos.length === 0) {
        return res.status(404).send('No todos available');
    }
    
    const randomIndex = Math.floor(Math.random() * todos.length);
    const randomTodo = todos[randomIndex];
    res.send(randomTodo);
});

app.get('/', (req, res) => {
    if (todos.length === 0) {
        return res.send('No todos available');
    }
    
    const formattedTodos = todos.map((todo, index) => 
        `${index + 1}. ${todo}`
    ).join('\n');
    
    res.set('Content-Type', 'text/plain');
    res.send(`Your Todo List:\n\n${formattedTodos}`);
});

app.get('/web', (req, res) => {
    let html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Todo List</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            h1 { color: #333; }
            ul { list-style-type: none; padding: 0; }
            li { padding: 10px; margin: 5px 0; background: #f4f4f4; border-radius: 5px; }
        </style>
    </head>
    <body>
        <h1>My Todo List</h1>
        <ul>
    `;
    
    todos.forEach(todo => {
        html += `            <li>${todo}</li>\n`;
    });
    
    html += `
        </ul>
    </body>
    </html>
    `;
    
    res.set('Content-Type', 'text/html');
    res.send(html);
});

app.delete('/', (req, res) => {
    if (todos.length === 0) {
        return res.status(404).send('No todos to delete');
    }
    
    const deletedTodo = todos.shift(); 
    res.send(`Deleted: ${deletedTodo}\nRemaining todos: ${todos.length}`);
});

app.post('/', (req, res) => {
    const { task } = req.body;
    
    if (!task || task.trim() === '') {
        return res.status(400).send('Task cannot be empty');
    }
    
    todos.push(task.trim());
    res.send(`Todo added successfully! Total todos: ${todos.length}`);
});

app.post('/add', (req, res) => {
    let task = req.body.task || req.query.task;
    
    if (!task || task.trim() === '') {
        return res.status(400).send('Task cannot be empty');
    }
    
    todos.push(task.trim());
    res.send(`Todo added: "${task}"\nTotal todos: ${todos.length}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('GET  /       - Get all todos');
    console.log('GET  /random - Get random todo');
    console.log('GET  /web    - Get todos as HTML');
    console.log('POST /       - Add new todo');
    console.log('POST /add    - Add new todo (alternative)');
    console.log('DELETE /     - Delete first todo');
});