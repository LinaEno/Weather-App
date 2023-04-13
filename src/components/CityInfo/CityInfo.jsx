import React from 'react';
import { FiMapPin, FiClock } from 'react-icons/fi';

import css from './CityInfo.module.css';

const CityInfo = ({ current }) => {
  const addZero = num => {
    if (num < 10) return `0${num}`;
    else return num;
  };

  const cityTime = () => {
    let d = new Date(),
      utc = d.getTime() + d.getTimezoneOffset() * 60000,
      nd = new Date(utc + 1000 * current.timezone),
      hours = addZero(nd.getHours()),
      minutes = addZero(nd.getMinutes());
    return `${hours} : ${minutes}`;
  };

  return (
    <div>
      <img
        className={css.city__img}
        src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
        alt="Icon Weather"
      />
      <div className={css.city__geo}>
        <p>
          <FiClock size="13px" /> {cityTime()}
        </p>
        <p>
          <FiMapPin size="14px" /> {current.name}
        </p>
      </div>
      <div className={css.city__degree}>
        <p className={css.degree__number}>
          {(current.main.temp - 273.15).toFixed()}
          <span className={css.degree__sign}>°C</span>
        </p>
        <p>feels like&#160; {(current.main.feels_like - 273.15).toFixed()}°</p>
      </div>
    </div>
  );
};

export default CityInfo;
