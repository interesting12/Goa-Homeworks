function getRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImage = document.getElementById('dog-image');
            dogImage.src = data.message;
        });
}

// Initial call to show a random dog image when the page loads
getRandomDogImage();
