import React, { useState, useEffect } from 'react'

export default function Weather() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,Ro&appid=c7da641777760054e5ca6164eb47580a')
            .then(res => res.json())
            .then(data => setWeather(data));
    }, []);

    function getTempInC(temp) {
        return Math.floor(temp - 273.15)
    }

    console.log(weather)
    if(!weather) {
        return <h1>Loading ...</h1>;
    }

    return(
        <div>
            <h1>The Weather for {weather.name}</h1>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='img'/>
            <p>Temperature: {getTempInC(weather.main.temp)}° C</p>
            <p>Min: {getTempInC(weather.main.temp_min)}° C |Max: {getTempInC(weather.main.temp_max)}° C </p>
            <p>Feels Like: {getTempInC(weather.main.feels_like)}° C</p>
        </div>
    )
}