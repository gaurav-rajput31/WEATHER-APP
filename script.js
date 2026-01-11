
tailwind.config = {
    theme: {
        extend: {
            colors: {
                clifford: '#da373d',
            }
        }
    }             
}
    
// OpenWeatherMap API Key
const apiKey = "a5d25a2551a4cdcb95a0bbb3ac1679ef";  // Replace with your OpenWeatherMap API key

// Fetch Weather Data
async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert("oye bsdk  city name sahi se daal ");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Display Weather Data
function displayWeather(data) {
    const temperature = data.main.temp;
    const city = data.name;
    const country = data.sys.country;
    const description = data.weather[0].description;
    const windSpeed = data.wind.speed;
    const humidity = data.main.humidity;

    // Update HTML with fetched data
    document.getElementById("temp").textContent = `${temperature}°C`;
    document.getElementById("city").textContent = `${city}, ${country}`;
    document.getElementById("description").textContent = description;
    document.getElementById("wind").textContent = `${windSpeed} km/h`;
    document.getElementById("humidity").textContent = `${humidity}%`;
}

// Search on form submit
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const city = document.getElementById("cityInput").value;
    fetchWeather(city);
});

