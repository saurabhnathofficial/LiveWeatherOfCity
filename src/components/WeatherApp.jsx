import React, { useState } from 'react';
import Weather from './Weather';
import Info from './Info';
function WeatherApp() {

  const [weatherInfo,setWeatherInfo] = useState({

    city: "Bhopal",
    temp: 29.24,
    tempMin: 22.24,
    tempMax: 22.24,
    humidity: 91,
    feelsLike: 22.9,
    visibility: 91,
    wind: 2.78,
    wind_deg: 4,
  })

let updateInfo = (newNnfo) => {
  setWeatherInfo(newNnfo);
}


  return (
 
    <>
      <Weather updateInfo={updateInfo}/>
      <Info info={weatherInfo}/>
    </>
  )
}

export default WeatherApp