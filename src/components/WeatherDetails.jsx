import React from "react";

export const WeatherDetails = (props) => {
  let { temp, city, country, weatherIcon } = props;


  return (
    <>
      <div className="flex justify-center items-center py-2">
        <div className="w-24 h-24 ">
          <img
            className="w-full h-full object-cover"
            src={weatherIcon}
            alt="sun"
          />
        </div>
      </div>
      <div className="my-1">
        <div id="degeree">
          <h2 className="text-2xl tracking-wide text-center font-semibold ">
            {temp}
            <sup>o</sup>C
          </h2>
        </div>
        <div id="dist">
          <h1 className="text-3xl text-center uppercase font-semibold ">
            {city}
          </h1>
        </div>
        <div id="coun"></div>
        <h1 className="text-2xl text-center uppercase font-semibold ">
          {country}
        </h1>
      </div>
    </>
  );
};
