function addUser() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;


    if (firstName && lastName && email) {
        const userTableBody = document.getElementById("userTable").getElementsByTagName("tbody")[0];

        const row = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = firstName;

        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = lastName;

        const emailCell = document.createElement("td");
        emailCell.textContent = email;

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            userTableBody.removeChild(row);
        };
        actionCell.appendChild(deleteButton);

    
        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(emailCell);
        row.appendChild(actionCell);

       
        userTableBody.appendChild(row);


        document.getElementById("userForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
}