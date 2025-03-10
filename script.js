async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "3f123479262d2783586e98866fc3e8b7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Invalid response from API");
        const data = await response.json();
        
        if (data.cod !== 200) {
            document.getElementById("weather").innerHTML = `Error: ${data.message}`;
        } else {
            document.getElementById("weather").innerHTML = 
                `<h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>`;
        }
    } catch (error) {
        document.getElementById("weather").innerHTML = "Error fetching data! Please check your API key or internet connection.";
    }
}