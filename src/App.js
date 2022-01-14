import React, { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "17ed47dca663e740ebcd2e0a28130430";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        });
    }
  };
  return (
    <div className="container">
      <input
        className="input"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />
      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Welcome to Weather App! Enter a City to get Weather</p>
        </div>
      ) : (
        <div className="weather-data">
          <p className="city">{weatherData.name}</p>
          <p className="temp">{Math.round(weatherData.main.temp - 273)}°C</p>
          <p className="weather">{weatherData.weather[0].main}</p>
        </div>
      )}

      {weatherData.cod==="404"? (
        <p>City Not Found</p>
      ):(   
        <></>
      )}
    </div>
  )
}

export default App;

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
// const apiKey = "17ed47dca663e740ebcd2e0a28130430"
