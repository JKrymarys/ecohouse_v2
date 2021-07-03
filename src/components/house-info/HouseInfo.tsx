import React, { useEffect, useState } from "react";

import { getCurrentState } from "utils/backend";

import "./HouseInfo.scss";

interface CurrentHouseState {
  datetime: string;
  pressure: number;
  temp: number;
}

export default function HouseInfo() {
  const [
    currentHouseState,
    setCurrentHouseState,
  ] = useState<CurrentHouseState>();

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrentState().then(setCurrentHouseState);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="current-house-info">
      {currentHouseState ? (
        <>
          <div className="info-row">temp: {currentHouseState.temp} </div>
          <div className="info-row">pressure: {currentHouseState.pressure}</div>
        </>
      ) : (
        <div> No data </div>
      )}
    </div>
  );
}
