import React from 'react';

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
      <div>
        <div>
          <p>{(current.main.temp - 273.15).toFixed()}°</p>
          <p>Today</p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
          alt="Icon Weather"
        />
      </div>
      <p>Time : {cityTime()}</p>
      <p>City : {current.name}</p>
    </div>
  );
};

export default CityInfo;
