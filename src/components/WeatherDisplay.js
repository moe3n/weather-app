import React from "react";

const WeatherDisplay = ({weather}) => {
    const {name, main, weather: WeatherDetails} = weather;
    const temperature = main.temp;
    const condition = WeatherDetails[0].description;

    const getBackgroundColor =() =>{
        if(temperature<10) return "#6ec1e4"; 
        if (temperature < 25) return "#f9d976"; // Moderate: Yellow
        return "#ff7e67"; // Hot: Orange
    };

    const style = {
        backgroundColor: getBackgroundColor(),
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        color: "#fff",
    };

    return (
        <div style={style}>
          {/* Display city name */}
          <h2>{name}</h2>
    
          {/* Display temperature */}
          <p>{`Temperature: ${temperature}°C`}</p>
    
          {/* Display weather condition */}
          <p>{`Condition: ${condition}`}</p>
        </div>
      );

};

export default WeatherDisplay;