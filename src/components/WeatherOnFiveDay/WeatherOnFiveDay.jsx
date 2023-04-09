import React from 'react';
import css from './Weather5.module.css';

const WeatherOnFiveDay = ({ fiveDays, date }) => {
  return (
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
  );
};

export default WeatherOnFiveDay;

// import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
{
  /* <Tabs>
  <TabList>
    <Tab>
      <Text>Gallery</Text>
    </Tab>
    <Tab>
      <Text>Todos</Text>
    </Tab>
  </TabList>

  <TabPanel>
    <Gallery />
  </TabPanel>
  <TabPanel>
    <Todos />
  </TabPanel>
</Tabs>; */
}
