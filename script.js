const apikey="API_KEY";
async function getWeather() 
{
    const city = document.getElementById("getdata").value;
    if(city.trim() === " ") 
        {
            alert("Enter city name");
            return;
    }

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

try {
    const response = await fetch(url);
    const data = await response.json();

    if(data.cod === "404") {
        document.getElementById("WeatherResult").innerHTML = "City not found";
        return;
    }

    document.getElementById("WeatherResult").innerHTML =`
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>`;
  } 
  catch (error) 
  {
    document.getElementById("WeatherResult").innerHTML = "Error fetching data!";
  }
}
