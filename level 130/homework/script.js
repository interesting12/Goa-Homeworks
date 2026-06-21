async function getJoke() {
    const resultDiv = document.getElementById('result');
    const errorMessage = document.getElementById('error-message');
    
    errorMessage.textContent = ''; // Clear any previous error
    resultDiv.textContent = ''; // Clear any previous result
    
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
        
        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }

        const jokeData = await response.json();

        if (jokeData.type === 'single') {
            resultDiv.textContent = jokeData.joke; // Single-line joke
        } else if (jokeData.type === 'twopart') {
            resultDiv.innerHTML = `<p>${jokeData.setup}</p><p><strong>${jokeData.delivery}</strong></p>`; // Two-part joke
        }
    } catch (error) {
        errorMessage.textContent = `Error: ${error.message}`;
    }
}

async function getAdvice() {
    const resultDiv = document.getElementById('result');
    const errorMessage = document.getElementById('error-message');
    
    errorMessage.textContent = ''; // Clear any previous error
    resultDiv.textContent = ''; // Clear any previous result
    
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        
        if (!response.ok) {
            throw new Error('Failed to fetch advice');
        }

        const adviceData = await response.json();
        resultDiv.textContent = `"${adviceData.slip.advice}"`; // Display advice
    } catch (error) {
        errorMessage.textContent = `Error: ${error.message}`;
    }
}
