async function fetchWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "d92fcc34c4b01f6c3c4cbd9705969e10";  // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert("City not found, please try again.");
        }
    } catch (error) {
        alert("Error fetching weather data. Please try again later.");
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById("weather-result");
    weatherResult.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
}
