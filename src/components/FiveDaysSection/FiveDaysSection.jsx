import React from 'react';
import css from './FiveDays.module.css'

const FiveDaysSection = ({ fiveDays, setDate }) => {

  // const data = [...new Set(fiveDays.map(item => item.dt))].map(day => {
  //   var date = new Date(day * 1000);
  //   return date;
  // } );
  
  return (
    <section className={css.fivedays__container}>
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
    </section>
  );
};

export default FiveDaysSection;
