const http = require('http');
const url = require('url');
const querystring = require('querystring');

const PORT = 3000;

let todos = [
    "Complete homework assignment",
    "Buy groceries",
    "Call the doctor",
    "Pay electricity bill",
    "Read a book",
    "Exercise for 30 minutes",
    "Plan weekend trip"
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    console.log(`${method} ${pathname}`);

    if (method === 'GET' && pathname === '/random') {
        if (todos.length === 0) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('No todos available');
            return;
        }
        
        const randomIndex = Math.floor(Math.random() * todos.length);
        const randomTodo = todos[randomIndex];
        
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(randomTodo);
        return;
    }

    if (method === 'GET' && pathname === '/web') {
        let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Todo List</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    margin: 40px; 
                    background: #f0f8ff;
                }
                h1 { 
                    color: #2c3e50; 
                    text-align: center;
                    border-bottom: 2px solid #3498db;
                    padding-bottom: 10px;
                }
                ul { 
                    list-style-type: none; 
                    padding: 0; 
                    max-width: 600px;
                    margin: 0 auto;
                }
                li { 
                    padding: 15px; 
                    margin: 10px 0; 
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                    border-left: 4px solid #3498db;
                }
                .empty { 
                    text-align: center; 
                    color: #7f8c8d; 
                    font-style: italic;
                }
            </style>
        </head>
        <body>
            <h1>My Todo List</h1>
            <ul>
        `;
        
        if (todos.length === 0) {
            html += '<li class="empty">No todos available</li>';
        } else {
            todos.forEach(todo => {
                html += `            <li>${todo}</li>\n`;
            });
        }
        
        html += `
            </ul>
        </body>
        </html>
        `;
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
        return;
    }

    if (method === 'GET' && pathname === '/') {
        if (todos.length === 0) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('No todos available');
            return;
        }
        
        const formattedTodos = todos.map((todo, index) => 
            `${index + 1}. ${todo}`
        ).join('\n');
        
        const response = `Your Todo List:\n\n${formattedTodos}\n\nTotal: ${todos.length} todos`;
        
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(response);
        return;
    }

    if (method === 'DELETE' && pathname === '/') {
        if (todos.length === 0) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('No todos to delete');
            return;
        }
        
        const deletedTodo = todos.shift();
        const response = `Deleted: "${deletedTodo}"\nRemaining todos: ${todos.length}`;
        
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(response);
        return;
    }

    if (method === 'POST' && pathname === '/') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                let task;
                
                if (req.headers['content-type'] === 'application/json') {
                    const data = JSON.parse(body);
                    task = data.task;
                } else {
                    const data = querystring.parse(body);
                    task = data.task;
                }
                
                if (!task || task.trim() === '') {
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end('Task cannot be empty');
                    return;
                }
                
                todos.push(task.trim());
                
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`Todo added successfully!\nNew todo: "${task}"\nTotal todos: ${todos.length}`);
                
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Invalid request data');
            }
        });
        return;
    }

    if (method === 'POST' && pathname === '/add') {
        const query = parsedUrl.query;
        const task = query.task;
        
        if (!task || task.trim() === '') {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Task cannot be empty');
            return;
        }
        
        todos.push(task.trim());
        
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Todo added: "${task}"\nTotal todos: ${todos.length}`);
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Endpoint not found');
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('GET  /       - Get all todos (text format)');
    console.log('GET  /random - Get random todo');
    console.log('GET  /web    - Get todos as HTML');
    console.log('POST /       - Add new todo (JSON or form data)');
    console.log('POST /add?task=your-task - Add new todo (query parameter)');
    console.log('DELETE /     - Delete first todo');
});

server.on('error', (error) => {
    console.error('Server error:', error);
});