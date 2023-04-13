import React from 'react';
import css from './Weather5.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const WeatherOnFiveDay = ({ fiveDays }) => {
  const dates = [...new Set(fiveDays.map(item => item.dt_txt.slice(0, 10)))];

  return (
    <Tabs>
      <TabList>
        {dates.map(date => {
          const formattedDate = new Date(date).toDateString().slice(0, 11);
          return <Tab key={date}>{formattedDate}</Tab>;
        })}
      </TabList>
      {dates.map(date => (
        <TabPanel key={date}>
          <div className={css.days__container}>
            {fiveDays
              .filter(item => item.dt_txt.includes(date))
              .map(item => (
                <div key={item.dt_txt} className={css.days__item}>
                  <h3>{item.dt_txt.slice(11, 16)}</h3>
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    alt="Icon Weather"
                  />
                  <p>{(item.main.temp_max - 273.15).toFixed()}°C</p>
                  <p>{(item.main.temp_min - 273.15).toFixed()}°C</p>
                  <p className={css.days__description}>
                    {item.weather[0].description}
                  </p>
                </div>
              ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default WeatherOnFiveDay;
