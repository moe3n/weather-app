import React, { useState } from "react";
import axios from "axios";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import "./styles.css";

const App = () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async (city) => {
        const API_KEY = "fa7342e3d842c7cee5b60bf7cc5e46a5";
        const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=fa7342e3d842c7cee5b60bf7cc5e46a5`;

        // const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        try{
            const response = await axios.get(URL);
            setWeatherData(response.data);
        }catch (error){
            console.error("Error fetching weather data from the API:", error);
            setWeatherData(null);
        }
    };

    return(
        <div className="app">
            <WeatherSearch onSearch={fetchWeather}/>
            {weatherData && <WeatherDisplay weather = {weatherData}/>}

        </div>
    );
}
export default App;