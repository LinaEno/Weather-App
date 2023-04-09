import React from 'react';
import css from './FiveDays.module.css';

const FiveDaysSection = ({ fiveDays, setDate }) => {
  // return (
  //   <section className={css.fivedays__container}>
  //     <h2>5 days</h2>
  //     <ul>
  //       {[...new Set(fiveDays.map(item => item.dt))].map(day => {
  //         let date = new Date(day * 1000);
  //         const newDate = date.join('').slice(0, 15);
  //         return (
  //           <li key={day} onClick={() => setDate(day)}>
  //             {newDate}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </section>
  // );

  return (
    <section className={css.fivedays__container}>
      <h2>5 days</h2>
      <ul>
        {[...new Set(fiveDays.map(item => item.dt_txt.slice(0, 10)))].map(
          elem => {
            const date = new Date(elem);
            const formattedDate = date
              .toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })
              .replace(/\//g, '-');
            return (
              <li key={elem} onClick={() => setDate(elem)}>
                {formattedDate}
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default FiveDaysSection;

// const data = [...new Set(fiveDays.map(item => item.dt))].map(day => {
//   var date = new Date(day * 1000);
//   return date;
// });
