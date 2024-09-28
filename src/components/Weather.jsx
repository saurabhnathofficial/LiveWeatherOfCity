import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./weather.css";
import { Visibility } from '@mui/icons-material';
import { red } from '@mui/material/colors';



function Weather({updateInfo}) {
    const API_URL  = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7bbcb79b3f074f25a7fe135bdd9a433c";
    
    const [city,setCity] = useState("");
    const [arror,setError] = useState(false);

    let getWeatherInfo = async () => {
        try{
            
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
       let jsonResponse = await response.json();
       console.log(jsonResponse)
       let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        visibility: jsonResponse.main.humidity,
        wind: jsonResponse.wind.speed,
        wind_deg: jsonResponse.wind.deg,

       };

       console.log(result)
       return result;
        }catch(arror){
            throw(arror)
        }
    }

        let handleSubmit = async (event) => {
           try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newNnfo = await getWeatherInfo();
            updateInfo(newNnfo);
           }catch(arror){
            setError(true);
           }
        }

        let handleChange = (event) => {
            setCity(event.target.value);
        }      

    return (
        <div>
            <form action="" onSubmit={handleSubmit} id='Title'>
                <h2>Let's Check weather of you city</h2>
                <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {arror && <p style={{color:"#d32f2f"}}>No such place Found</p>}
            </form>
        </div>
    )
}

export default Weather