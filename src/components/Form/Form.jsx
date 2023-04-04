import axios from 'axios';

const Form = ({ setCurrent, setFiveDays, setDate }) => {
  const getWeatherUseCityName = e => {
    e.preventDefault();
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`
    )
      .then(({ data }) => setCurrent(data))
      .catch(() => alert('City is not found'));

    axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${e.target[0].value}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`
    )
      .then(({ data }) => {
        setFiveDays(data.list);
        setDate(data.list[0].dt_txt.slice(0, 10));
      })
      .catch(() => alert('City is not found'));
    e.target[0].value = '';
  };

  return (
    <form onSubmit={getWeatherUseCityName}>
      <input placeholder="Write city" type="search" required />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
