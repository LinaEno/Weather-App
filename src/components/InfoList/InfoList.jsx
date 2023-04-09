import React from 'react';
import { FiThermometer, FiWind, FiCloudDrizzle } from 'react-icons/fi';
import css from './InfoList.module.css';

const InfoList = ({ current }) => {
  console.log(current)

  return (
      <ul className={css.info__container}>
        {/* <li className={css.info__item}>
          <p>Temperature</p>
          <p>
            {(current.main.temp - 273.15).toFixed()}° - 
            feels like 
            {(current.main.feels_like - 273.15).toFixed()}°
          </p>
        </li> */}
        <li className={css.info__item}>
          <p><FiThermometer />&#160;&#160;<b>Pressure</b></p>
          {/* <p>{current.main.pressure} mmHg - normal</p> */}
          <p>{current.main.pressure} mmHg</p>
        </li>
        <li className={css.info__item}>
        <p><FiWind />&#160;&#160;<b>Wind</b></p>
          <p>{current.wind.speed} m/s</p>
        </li>
        <li className={css.info__item}>
        <p><FiCloudDrizzle />&#160;&#160;<b>Precipitation</b></p>
          <p>{current.weather[0].description}</p>
        </li>
      </ul>
  );
};

export default InfoList;
