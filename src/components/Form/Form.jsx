import { getWeather, getWeatherFiveDays } from 'utils/Api';
import css from './Form.module.css';
import { FiSearch } from 'react-icons/fi';

const Form = ({ setCurrent, setFiveDays, setDate }) => {
  const getWeatherInfo = e => {
    e.preventDefault();

    getWeather(e.target[0].value)
      .then(({ data }) => setCurrent(data))
      .catch(() => alert('City is not found'));

    getWeatherFiveDays(e.target[0].value)
      .then(({ data }) => {
        setFiveDays(data.list);
        console.log(data);
        setDate(data.list[0].dt_txt.slice(0, 10));
      })
      .catch(() => alert('City is not found'));
    e.target[0].value = '';
  };

  return (
    <form onSubmit={getWeatherInfo}>
      <div className={css.search}>
        <input
          className={css.search__input}
          placeholder="Write city"
          type="search"
          required
        />
        <button className={css.search__button} type="submit">
          <FiSearch size="30px" />
        </button>
      </div>
    </form>
  );
};

export default Form;
