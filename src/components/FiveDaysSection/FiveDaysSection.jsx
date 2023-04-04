import React from 'react';

const FiveDaysSection = ({ fiveDays, setDate }) => {
  return (
    <section>
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
