import { getWeather, getWeatherFiveDays } from 'utils/Api';
import css from './Form.module.css';
import VideoPlayer from 'react-background-video-player';
import { FiSearch } from 'react-icons/fi';

const FormEmpty = ({ setCurrent, setFiveDays, setDate }) => {
  const getWeatherInfo = e => {
    e.preventDefault();

    getWeather(e.target[0].value)
      .then(({ data }) => setCurrent(data))
      .catch(() => alert('City is not found'));

    getWeatherFiveDays(e.target[0].value)
      .then(({ data }) => {
        setFiveDays(data.list);
        setDate(data.list[0].dt_txt.slice(0, 10));
      })
      .catch(() => alert('City is not found'));
    e.target[0].value = '';
  };

  return (
    <form onSubmit={getWeatherInfo}>
      <section className={css.showcase}>
        <VideoPlayer
          classNameName={css.video}
          src={
            'https://res.cloudinary.com/dlslkjyrn/video/upload/v1680822947/clideo_editor_55d4048059c34596ac12805ee1d21505_online-video-cutter.com_i3l5bq.mp4'
          }
          autoPlay={true}
          muted={true}
        />
        <div className={css.content}>
          <input
            className={css.content__input}
            placeholder="Write city"
            type="search"
            required
          />
          <button className={css.content__button} type="submit">
            <FiSearch size="25px" />
          </button>
        </div>
      </section>
    </form>
  );
};

export default FormEmpty;
