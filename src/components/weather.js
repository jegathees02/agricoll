import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
// import CityComponent from "./modules/CityComponent";
// import WeatherComponent from "./modules/WeatherInfoComponent";
// import CityComponent from "./citycomponent";
// import WeatherComponent from "./pages/weatherinfocomponent";
import CityComponent from "./citycomponent";
import WeatherComponent from "./weatherinfocomponent";

export const WeatherIcons = {
  "01d": "https://res.cloudinary.com/dkmm9khbp/image/upload/v1674843410/AGRICOL/icons/sunny_oaiblw.svg",
  "01n": "https://res.cloudinary.com/dkmm9khbp/image/upload/v1674843412/AGRICOL/icons/night_drclhi.svg",
  "02d": "https://res.cloudinary.com/dkmm9khbp/image/upload/v1674843412/AGRICOL/icons/day_jgrx2e.svg",
  "02n": "https://res.cloudinary.com/dkmm9khbp/image/upload/v1674843412/AGRICOL/icons/cloudy-night_lvpo3n.svg",
  "03d": "https://res.cloudinary.com/dkmm9khbp/image/upload/v1674843412/AGRICOL/icons/cloudy_qyeibo.svg",
  "03n": "https://res.cloudinary.com/dkmm9khbp/image/upload/v1674843412/AGRICOL/icons/cloudy_qyeibo.svg",
  "04d": "https://res.cloudinary.com/dkmm9khbp/image/upload/v1674843411/AGRICOL/icons/perfect-day_baj8yf.svg",
  "04n": "https://res.cloudinary.com/dkmm9khbp/image/upload/v1674843412/AGRICOL/icons/cloudy-night_lvpo3n.svg",
  "09d": "https://res.cloudinary.com/dkmm9khbp/image/upload/v1674843410/AGRICOL/icons/rain_qkoxic.svg",
  "09n": "https://res.cloudinary.com/dkmm9khbp/image/upload/v1674843410/AGRICOL/icons/rain-night_alk6s4.svg",
  "10d": "https://res.cloudinary.com/dkmm9khbp/image/upload/v1674843410/AGRICOL/icons/rain_qkoxic.svg",
  "10n": "https://res.cloudinary.com/dkmm9khbp/image/upload/v1674843410/AGRICOL/icons/rain-night_alk6s4.svg",
  "11d": "https://res.cloudinary.com/dkmm9khbp/image/upload/v1674843410/AGRICOL/icons/storm_nqqrs9.svg",
  "11n": "https://res.cloudinary.com/dkmm9khbp/image/upload/v1674843410/AGRICOL/icons/storm_nqqrs9.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function Weather() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c',
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>AgriCol Weather</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default Weather;