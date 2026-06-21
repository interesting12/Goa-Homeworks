const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const cityName = document.getElementById('cityInput').value;
    const errorMessage = document.getElementById('errorMessage');
    const weatherCards = document.getElementById('weatherCards');
    
    errorMessage.textContent = ''; // Clear previous error messages
    weatherCards.innerHTML = ''; // Clear previous weather data

    if (!cityName) {
        errorMessage.textContent = 'Please enter a city name!';
        return;
    }

    try {
        // Get coordinates for the city
        const locationResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
        if (!locationResponse.ok) {
            throw new Error('City not found');
        }
        
        const locationData = await locationResponse.json();
        const { lat, lon } = locationData.coord; // Get latitude and longitude for the city
        
        // Get the 7-day weather forecast
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`);
        if (!forecastResponse.ok) {
            throw new Error('Error fetching forecast data');
        }

        const forecastData = await forecastResponse.json();
        displayWeather(forecastData.daily); // Pass the daily weather data to the display function
    } catch (error) {
        errorMessage.textContent = `Error: ${error.message}`;
    }
}

function displayWeather(days) {
    const weatherCards = document.getElementById('weatherCards');

    days.forEach((day) => {
        const date = new Date(day.dt * 1000); // Convert timestamp to date
        const dayCard = document.createElement('div');
        dayCard.classList.add('day-card');

        const dayName = date.toLocaleString('en', { weekday: 'short' });
        const temperature = `${Math.round(day.temp.day)}°C`;
        const humidity = `${day.humidity}%`;

        dayCard.innerHTML = `
            <h3>${dayName}</h3>
            <p class="temperature">${temperature}</p>
            <p class="humidity">Humidity: ${humidity}</p>
        `;
        
        weatherCards.appendChild(dayCard);
    });
}

