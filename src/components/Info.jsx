import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Info.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

function Info({info}) {


  let RAIN_URL = "https://images.unsplash.com/photo-1708759284407-5b9f6fc8b231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxyYWluJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let HOT_URL = "https://images.unsplash.com/photo-1466995937966-2e6f29c6ed60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let COLD_URL = "https://cdn.pixabay.com/photo/2015/10/20/14/12/cabin-997781_960_720.jpg";

  
  return (
    <div >
      <Card id='info_wether' style={{width: '50vh'}} sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? RAIN_URL : info.temp > 25 ? HOT_URL : COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
           <br />
            {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 25 ? <WbSunnyIcon/> : <AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <div>Temprature = {info.temp}&deg;C</div>
            <div>Min Temp = {info.tempMin}&deg;C</div>
            <div>Max Temp = {info.tempMax}&deg;C</div>
            <div>Humidity = {info.humidity}</div>
            <div>visibility = {info.visibility}</div>
            <div>wind = {info.wind}</div>
            <div>wind_deg = {info.wind_deg}</div>
            <div>The Temprature feel like {info.feelsLike}&deg;C</div>
          </Typography>
        </CardContent>

      </Card>

    </div>
  )
}

export default Info