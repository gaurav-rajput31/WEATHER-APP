
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
const apiKey = "a5d25a2551a4cdcb95a0bbb3ac1679ef";  

// Fetch Weather Data
async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert("please enter valid place........  ");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}



function updateDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    document.getElementById("currentDateTime").textContent = now.toLocaleString('en-us', options);
}

// Call the function to update date and time on page load
updateDateTime();


setInterval(updateDateTime, 1000);


// Display Weather Data
function displayWeather(data) {
    const temperature = data.main.temp;
    const city = data.name;
    const country = data.sys.country;
    const description = data.weather && data.weather[0] ? data.weather[0].description : "No description available";
    const windSpeed = data.wind.speed;
    const humidity = data.main.humidity;

    // Update HTML with fetched data
    document.getElementById("temp").textContent = `${temperature}°C`;
    document.getElementById("city").textContent = `${city}, ${country}`;
    document.getElementById("description").textContent = `${description}`;
    document.getElementById("wind").textContent = `${windSpeed} km/h`;
    document.getElementById("humidity").textContent = `${humidity}%`;
}

// Search on form submit
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const city = document.getElementById("cityInput").value;
    fetchWeather(city);
});




