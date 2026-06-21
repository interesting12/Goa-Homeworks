const form = document.querySelector("form");
const tbody = document.querySelector("tbody");


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const link = form.link.value;

    const data = [name, email, password, link];

    const tr = document.createElement("tr");

    for(let i = 0; i < data.length; i++) {
        const td = document.createElement("td");
        td.textContent = data[i];
        tr.appendChild(td);

    }

    form.name.value = "";
    form.email.value = "";
    form.password.value = "";
    form.link.value = "";

    tbody.appendChild("tr");




});



// // const form = document.querySelector("form");
// const tbody = document.querySelector("tbody");


// form.addEventListener("submit", function(e) {
//     e.preventDefault();

//     const firstname = form.firstname.value;
//     const email = form.email.value;
//     const pass = form.pass.value;

//     const data = [firstname, email, pass];

//     const tr = document.createElement("tr");

//     for(let i = 0; i < data.length; i++) {
//         const td = document.createElement("td");
//         td.textContent = data[i];
//         tr.appendChild(td);
//     }


//     form.firstname.value = "";
//     form.email.value = "";
//     form.pass.value = "";

//     tbody.appendChild(tr);

// })


// const form = document.querySelector("form");
// const tbody = document.querySelector("tbody");


// form.addEventListener("submit", function(e) {
//     e.preventDefault();

//     const firstname = form.firstname.value;
//     const email = form.email.value;
//     const pass = form.pass.value;

//     // tbody.innerHTML = "<p>" + firstname + "</p>";
//     // tbody.innerHTML = `<p>${firstname}</p>`;

//     tbody.innerHTML += `
//         <tr>
//             <td>${firstname}</td>
//             <td>${email}</td>
//             <td>${pass}</td>
//         </tr>
//     `;

// })