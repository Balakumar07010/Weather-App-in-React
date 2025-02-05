import React from "react";

export const WindDetails = (props) => {
  let {humitity, wind} = props
  return (
    <>
      <div id="wind" className="flex justify-between mx-8">
        <div className="flex flex-col items-center ">
          <div className="w-16 h-16">
            <img
              className="w-full h-full object-cover"
              src="./humitity.png"
              alt="hum"
            />
          </div>
          <span>{humitity}%</span>
          <p>Humidity</p>
        </div>

        <div className="flex flex-col items-center ">
          <div className="w-16 h-16">
            <img
              className="w-full h-full object-cover"
              src="./wind.png"
              alt="hum"
            />
          </div>
          <span>{wind}%</span>
          <p>wind</p>
        </div>
      </div>
    </>
  );
};
