const MainSection = ({ current, fiveDays, date, setDate }) => {
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
    <section>
      <div>
        <div>
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
        </div>
        <h2>5 days</h2>
        <ul>
          {[...new Set(fiveDays.map(item => item.dt_txt.slice(0, 10)))].map(
            elem => (
              <li key={elem} onClick={() => setDate(elem)}>
                {elem}
              </li>
            )
          )}
        </ul>
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
      </div>
    </section>
  );
};

export default MainSection;
