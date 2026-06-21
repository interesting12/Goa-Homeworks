const Database = require('better-sqlite3');
const db = new Database('tasks.db');


db.exec(`
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    completed INTEGER DEFAULT 0
);
`);



db.exec(`
CREATE TABLE IF NOT EXISTS history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task_id INTEGER,
    action_type TEXT,
    old_value TEXT,
    new_value TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);




db.exec(`
CREATE TRIGGER IF NOT EXISTS complete_task
AFTER UPDATE ON tasks
WHEN NEW.completed = 1
BEGIN
    INSERT INTO history(task_id, action_type, old_value, new_value)
    VALUES (OLD.id, 'COMPLETED', OLD.title, NEW.title);

    DELETE FROM tasks WHERE id = OLD.id;
END;
`);



db.exec(`
CREATE TRIGGER IF NOT EXISTS update_title
AFTER UPDATE ON tasks
WHEN OLD.title != NEW.title
BEGIN
    INSERT INTO history(task_id, action_type, old_value, new_value)
    VALUES (OLD.id, 'TITLE_CHANGED', OLD.title, NEW.title);
END;
`);


db.exec(`
CREATE TRIGGER IF NOT EXISTS delete_task
AFTER DELETE ON tasks
BEGIN
    INSERT INTO history(task_id, action_type, old_value, new_value)
    VALUES (OLD.id, 'DELETED', OLD.title, NULL);
END;
`);