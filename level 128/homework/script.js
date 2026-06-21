function generateAnimalImage() {
    const catChecked = document.getElementById('catCheckbox').checked;
    const dogChecked = document.getElementById('dogCheckbox').checked;
    const foxChecked = document.getElementById('foxCheckbox').checked;
    const errorMessage = document.getElementById('error-message');
    const animalImage = document.getElementById('animal-image');

    errorMessage.textContent = ''; // Clear previous error message
    animalImage.src = ''; // Clear previous image

    if (!catChecked && !dogChecked && !foxChecked) {
        errorMessage.textContent = 'Please select at least one animal (Cat, Dog, or Fox).';
        return;
    }

    // Randomly choose an animal API to fetch from
    if (catChecked) {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                animalImage.src = data[0].url;
            })
            .catch(error => {
                errorMessage.textContent = 'Error fetching cat image. Please try again later.';
            });
    } else if (dogChecked) {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                animalImage.src = data.message;
            })
            .catch(error => {
                errorMessage.textContent = 'Error fetching dog image. Please try again later.';
            });
    } else if (foxChecked) {
        fetch('https://randomfox.ca/floof/')
            .then(response => response.json())
            .then(data => {
                animalImage.src = data.image;
            })
            .catch(error => {
                errorMessage.textContent = 'Error fetching fox image. Please try again later.';
            });
    }
}
