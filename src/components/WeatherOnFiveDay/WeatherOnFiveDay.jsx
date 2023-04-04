import React from 'react';

const WeatherOnFiveDay = ({ fiveDays, date }) => {
  return (
    <div>
      {fiveDays
        .filter(item => item.dt_txt.includes(date))
        .map(item => (
          <div key={item.dt_txt}>
            <h3>{item.dt_txt.slice(11, 16)}</h3>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="Icon Weather"
            />
            <p>{(item.main.temp_max - 273.15).toFixed()}°C</p>
            <p>{(item.main.temp_min - 273.15).toFixed()}°C</p>
            <p>{item.weather[0].description}</p>
          </div>
        ))}
    </div>
  );
};

export default WeatherOnFiveDay;
