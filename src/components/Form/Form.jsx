import { getWeather, getWeatherFiveDays } from 'utils/Api';

const Form = ({ setCurrent, setFiveDays, setDate }) => {
  const getWeatherInfo = e => {
    e.preventDefault();

    getWeather(e.target[0].value)
      .then(({ data }) => setCurrent(data))
      .catch(() => alert('City is not found'));

    getWeatherFiveDays(e.target[0].value)
      .then(({ data }) => {
        console.log(data);
        setFiveDays(data.list);
        setDate(data.list[0].dt_txt.slice(0, 10));
      })
      .catch(() => alert('City is not found'));
    e.target[0].value = '';
  };

  return (
    <form onSubmit={getWeatherInfo}>
      <input placeholder="Write city" type="search" required />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
