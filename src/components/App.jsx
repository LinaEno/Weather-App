import { useEffect, useState } from 'react';
import Header from './Header/Header';
import MainSection from './MainSection/MainSection';
import Form from './Form/Form';
import axios from 'axios';

const App = () => {
  const [current, setCurrent] = useState({});
  const [fiveDays, setFiveDays] = useState([]);
  const [date, setDate] = useState('');

  function showPosition(position) {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`
    ).then(({ data }) => setCurrent(data));

    axios(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`
    ).then(({ data }) => {
      setFiveDays(data.list);
      setDate(data.list[0].dt_txt.slice(0, 10));
    });
  }
  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    }
    getLocation();
  }, []);

  return (
    <div>
      {JSON.stringify(current) !== '{}' && fiveDays.length !== 0 ? (
        <>
          <Header
            setDate={setDate}
            setFiveDays={setFiveDays}
            setCurrent={setCurrent}
          />
          <MainSection
            current={current}
            fiveDays={fiveDays}
            date={date}
            setDate={setDate}
          />
        </>
      ) : (
        <div>
          <Form
            setDate={setDate}
            setFiveDays={setFiveDays}
            setCurrent={setCurrent}
          />
        </div>
      )}
    </div>
  );
};

export default App;
