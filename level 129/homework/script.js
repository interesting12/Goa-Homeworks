async function fetchUsers() {
    const userCardsContainer = document.getElementById('user-cards');
    const errorMessage = document.getElementById('error-message');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        errorMessage.textContent = `Error: ${error.message}`;
    }

    function displayUsers(users) {
        userCardsContainer.innerHTML = ''; // Clear any existing cards

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            
            const userName = `${user.name}`;
            const userEmail = `Email: ${user.email}`;
            const userAddress = `City: ${user.address.city}`;
            const userCompany = `Company: ${user.company.name}`;

            userCard.innerHTML = `
                <h2>${userName}</h2>
                <p>${userEmail}</p>
                <p class="address">${userAddress}</p>
                <p class="company">${userCompany}</p>
            `;

            userCardsContainer.appendChild(userCard);
        });
    }
}

fetchUsers();
