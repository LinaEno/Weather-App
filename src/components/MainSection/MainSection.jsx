import CityInfo from 'components/CityInfo/CityInfo';
import FiveDaysSection from 'components/FiveDaysSection/FiveDaysSection';
import InfoList from 'components/InfoList/InfoList';
import WeatherOnFiveDay from 'components/WeatherOnFiveDay/WeatherOnFiveDay';
import css from './MainSection.module.css'

const MainSection = ({ current, fiveDays, date, setDate }) => {
  return (
    <section className={css.main__container}>
      <dii className={css.container1}>
        <div>
          <CityInfo current={current} />
          <InfoList current={current} />
        </div>
        <FiveDaysSection fiveDays={fiveDays} setDate={setDate} />
      </dii>
      <WeatherOnFiveDay fiveDays={fiveDays} date={date} />
    </section>
  );
};

export default MainSection;
