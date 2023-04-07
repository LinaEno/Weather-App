import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import FormEmpty from 'components/Form/FormEmpty';
import {
  showWeatherInYourLocation,
  showWeatherInYourLocationFiveDays,
} from 'utils/Api';
import css from './App.module.css'
import bgc from '../../images/Background.jpg'


const App = () => {
  const [current, setCurrent] = useState({});
  const [fiveDays, setFiveDays] = useState([]);
  const [date, setDate] = useState('');




  function showPosition(position) {
    showWeatherInYourLocation(position).then(({ data }) => setCurrent(data));

    showWeatherInYourLocationFiveDays(position).then(({ data }) => {
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
        <div className={css.bgbox} style={{ backgroundImage: `url(${bgc})` }}>
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
        </div>
      ) : (
        <div>
          <FormEmpty
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
