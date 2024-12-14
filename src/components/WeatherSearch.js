import React, { useState } from "react";

const WeatherSearch = ( { onSearch }) => {
    const [ city, setCity] = useState("");

    const handleSearch = () => {
        if (city) onSearch(city);
    };


    return (
        <div className="weather-search">
            <input 
            type="text" 
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default WeatherSearch;