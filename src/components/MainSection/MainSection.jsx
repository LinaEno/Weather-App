import CityInfo from 'components/CityInfo/CityInfo';
import FiveDaysSection from 'components/FiveDaysSection/FiveDaysSection';
import InfoList from 'components/InfoList/InfoList';
import WeatherOnFiveDay from 'components/WeatherOnFiveDay/WeatherOnFiveDay';

const MainSection = ({ current, fiveDays, date, setDate }) => {
  return (
    <section>
      <CityInfo current={current} />
      <InfoList current={current} />
      <FiveDaysSection fiveDays={fiveDays} setDate={setDate} />
      <WeatherOnFiveDay fiveDays={fiveDays} date={date} />
    </section>
  );
};

export default MainSection;
