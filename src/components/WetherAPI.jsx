import React, { useState, useEffect } from "react";
import { Search } from "./Search";
import { WeatherDetails } from "./WeatherDetails";
import { WindDetails } from "./WindDetails";
import axios from "axios";
// Images

import clearIcon from "../assets/claer.png";
import cloudIcon from "../assets/cloud.png";
import drizzleIcon from "../assets/drizzle.png";
import humitityIcon from "../assets/humitity.png";
import rainyIcon from "../assets/rainy.jpg";
import searchIcon from "../assets/search.png";
import snowIcon from "../assets/snow.png";
import windIcon from "../assets/wind.png";
import { LatLon } from "./LatLon";
import { div } from "framer-motion/client";

export const WetherAPI = () => {
  const [searchCity, setSearchCity] = useState("Chennai");
  const [weatherIcon, setWeatherIcon] = useState(clearIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [humitity, setHumitity] = useState(0);
  const [wind, setWimd] = useState(0);
  //   Loading Event
  const [load, setLoad] = useState(false);
  const [notFound, setNotFound] = useState(false);

  //   Setthe Image
  const weatherIconMap = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": drizzleIcon,
    "03n": drizzleIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainyIcon,
    "09n": rainyIcon,
    "10d": rainyIcon,
    "10n": rainyIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };

  const search = async () => {
    setLoad(true);
    const APIkey = "8174855e3d99812075438984a96ef022";
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${APIkey}&units=Matric`;
    try {
      console.log(searchCity);
      let res = await fetch(URL);
      let data = await res.json();
      console.log(data);
      if (data.cod == "404") {
        console.error("Invalid City");
        setLoad(false);
        setNotFound(true);
        return;
      } else {
        setTemp(data.main.temp);
        setCity(data.name);
        setCountry(data.sys.country);
        setLat(data.coord.lat);
        setLon(data.coord.lon);
        setHumitity(data.main.humidity);
        setWimd(data.wind.speed);
        setNotFound(false);
        console.log(data.weather[0].icon);

        setWeatherIcon(weatherIconMap[data.weather[0].icon] || clearIcon);
      }
    } catch (error) {
      console.error("Error : ", error);
    } finally {
      setLoad(false);
    }
  };
  const handleCity = (e) => {
    setSearchCity(e.target.value);
  };
  const handelKeyDown = (e) => {
    if (e.key == "Enter") {
      console.log(e);
      search();
    }
  };
  useEffect(() => {
    search();
  }, []);
  return (
    <div className="w-full h-screen bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex justify-center items-center">
      <div className="w-4/5 sm:w-1/3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100">
        <h1 className="text-2xl text-center py-2 text-white font-semibold tracking-wide">
          Weather Application
        </h1>
        <Search
          search={search}
          searchCity={searchCity}
          handleCity={handleCity}
          handelKeyDown={handelKeyDown}
        />
        {notFound && (
          <div className="h-64  flex  items-center justify-center">
            <p className="text-2xl font-semibold  text-center ">
              City Not Found
            </p>
          </div>
        )}

        {!notFound && (
          <WeatherDetails
            temp={temp}
            city={city}
            country={country}
            weatherIcon={weatherIcon}
          />
        )}
        {!notFound && <LatLon lat={lat} lon={lon} />}
        {!notFound && <WindDetails humitity={humitity} wind={wind} />}
        <div id="footer">
          <p className="text-center p-4 ">Designed By Balakumar</p>
        </div>
      </div>
    </div>
  );
};
