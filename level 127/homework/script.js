fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const filteredUsers = users.filter(user => user.name[0].toUpperCase() >= 'A' && user.name[0].toUpperCase() <= 'H');
        filteredUsers.sort((a, b) => a.name.localeCompare(b.name));

        const userList = document.getElementById('user-list');
        filteredUsers.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });
    });
