const jokeButton = document.getElementById("jokeButton");
const displayDiv = document.getElementById("displayDiv");
const setupElement = document.getElementById("setup");
const deliveryElement = document.getElementById("delivery");
const jokeIDElement = document.getElementById("jokeID");

const apiURL = 'https://v2.jokeapi.dev/joke/Any?safe-mode';

jokeButton.addEventListener('click', fetchJoke);

function fetchJoke() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            displayDiv.style.display = 'block'; 

   
            setupElement.style.display = 'block';
            deliveryElement.style.display = 'none';
            jokeIDElement.innerText = `Joke ID: ${data.id}`; 

            setupElement.innerText = data.setup;
            setTimeout(() => {
                deliveryElement.style.display = 'block';
                deliveryElement.innerText = data.delivery;

                deliveryElement.classList.add('fade');
            }, 1000);
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}
