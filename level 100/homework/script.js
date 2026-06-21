const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

window.addEventListener('load', loadTask);

addTaskBtn.addEventListener('click', () => {
    if (taskInput.value.trim() !== '') {
        addTask(taskInput.value);
        taskInput.value = '';  // Clear input field after adding the task
    }
});

clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    loadTask();
});

function saveTasks() {
    let tasks = [];
    document.querySelectorAll('li').forEach((li) => {
        tasks.push(li.textContent.replace('Remove', '').trim()); 
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(task) {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    li.textContent = task;
    btn.textContent = 'Remove';
    li.appendChild(btn);
    taskList.appendChild(li);

    btn.addEventListener('click', () => {
        li.remove();
        saveTasks();  // Save tasks after removal
    });

    saveTasks();
}

function loadTask() {
    taskList.innerHTML = '';  // Clear current task list before loading from storage
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        tasks.forEach((task) => {
            addTask(task);
        });
    }
}
