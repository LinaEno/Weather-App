import CityInfo from 'components/CityInfo/CityInfo';
import InfoList from 'components/InfoList/InfoList';
import WeatherOnFiveDay from 'components/WeatherOnFiveDay/WeatherOnFiveDay';
import css from './MainSection.module.css';
import bgc from '../../images/Cloud.jpg';
import Sunset from 'components/Sunset/Sunset';

const MainSection = ({ current, fiveDays, date, setDate }) => {
  return (
    <section className={css.main__container}>
      <div className={css.container1}>
        <div
          className={css.container2}
          style={{ backgroundImage: `url(${bgc})` }}
        >
          <CityInfo current={current} />
          <InfoList current={current} />
        </div>
        <Sunset current={current} />
      </div>
      <WeatherOnFiveDay fiveDays={fiveDays} date={date} />
    </section>
  );
};

export default MainSection;
