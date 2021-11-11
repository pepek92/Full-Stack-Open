import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY

const Weather = (props) => {
    const [weather, setWeather] = useState({
        current: {
            temperature: 0,
            humidity: 0,
            wind_speed: 0,
            weather_icons: [],
            wind_dir: ""
        }
    })

    useEffect(() => {
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${props.city}`)
          .then(response => {
            setWeather(response.data)
          })
      }, [props.city])

    return (
        <div>
            <h2>Weather in {props.city}</h2>
            <p>Temperature: {weather.current.temperature} Celsius</p>
            <p>Humidity: {weather.current.humidity} %</p>
            <img src={weather.current.weather_icons} alt="weather_icon"/>
            <p>Wind: {weather.current.wind_speed} direction: {weather.current.wind_dir}</p>
        </div>
    )
}

export default Weather