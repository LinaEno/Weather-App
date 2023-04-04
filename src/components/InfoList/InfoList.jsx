import React from 'react';

const InfoList = ({ current }) => {
  return (
    <div>
      <ul>
        <li>
          <p>Temperature</p>
          <p>
            {(current.main.temp - 273.15).toFixed()}° - feels like
            {(current.main.feels_like - 273.15).toFixed()}°
          </p>
        </li>
        <li>
          <p>Pressure</p>
          <p>{current.main.pressure} mmHg - normal</p>
        </li>
        <li>
          <p>Precipitation</p>
          <p>{current.weather[0].description}</p>
        </li>
        <li>
          <p>Wind</p>
          <p>{current.wind.speed} m/s</p>
        </li>
      </ul>
    </div>
  );
};

export default InfoList;
