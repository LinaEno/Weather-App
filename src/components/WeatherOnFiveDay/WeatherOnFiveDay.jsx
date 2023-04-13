import React from 'react';
import css from './Weather5.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const WeatherOnFiveDay = ({ fiveDays, date, setDate }) => {

  console.log(fiveDays)
  return (

    <>
      <Tabs>
      <TabList>
      {[...new Set(fiveDays.map(item => item.dt_txt.slice(0, 10)))].map(
        elem => {
          const date = new Date(elem);
          const formattedDate = date
            .toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
            .replace(/\//g, '-');
          return (
            <Tab key={elem} onClick={() => setDate(elem)}>
              {formattedDate}
            </Tab>
          )
        }
        )}
      </TabList>
  
      
      {fiveDays
          .filter(item => item.dt_txt.includes(date))
          .map(item => (
            <TabPanel>
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
      </TabPanel>
          ))}
    </Tabs>
  
  <Tabs>
      <TabList>
      {[...new Set(fiveDays.map(item => item.dt_txt.slice(0, 10)))].map(
        elem => {
          const date = new Date(elem);
          const formattedDate = date
            .toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
            .replace(/\//g, '-');
          return (
            <Tab key={elem} onClick={() => setDate(elem)}>
              {formattedDate}
            </Tab>
          )
        }
        )}
      </TabList>
  
  
  
      <TabPanel>
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
      </TabPanel>
      <TabPanel>
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
      </TabPanel>
      <TabPanel>
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
      </TabPanel>
      <TabPanel>
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
      </TabPanel>
      <TabPanel>
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
      </TabPanel>
    </Tabs>
    </>
    
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

{/* <div className={css.days__container}>
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
    </div> */}