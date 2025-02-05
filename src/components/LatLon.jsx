import React from "react";

export const LatLon = (props) => {
  let { lat, lon } = props;
  return (
    <>
      <div id="latlog" className="flex justify-center gap-8 my-1">
        <div className="flex flex-col items-center">
          <p className="font-semibold">Lat</p>
          <p>{lat}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold">Lon</p>
          <p>{lon}</p>
        </div>
      </div>
    </>
  );
};
