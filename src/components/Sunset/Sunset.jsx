import React from 'react';
import css from './Sunset.module.css';

const Sunset = ({ current }) => {

  const addZero = num => {
    if (num < 10) return `0${num}`;
    else return num;
  };

  let timerise = JSON.stringify(new Date(current.sys.sunrise * 1000));
  let hourrise = addZero(Number(timerise.slice(12, 14)));
  let minuterise = timerise.slice(15, 17);

  let timeset = JSON.stringify(new Date(current.sys.sunset * 1000));
  let hourset = addZero(Number(timeset.slice(12, 14)));
  let minuteset = timeset.slice(15, 17);



  return (
    <div className={css.container}>
      <div style={{ marginBottom: '-20px' }}>
        <p className={css.text}>
          <b style={{ fontSize: '22px' }}>Sunrise</b>
        </p>
        <p className={css.text}>
          {hourrise} : {minuterise} GMT +0000
        </p>
      </div>

      <div>
        <svg
          viewBox="0 0 1000 1000"
          className={css.world}
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <clipPath id="clipPath">
              <circle cx="500" cy="500" r="400" />
            </clipPath>

            <clipPath id="reflection">
              <rect width="1000" height="500" />
            </clipPath>

            <symbol id="star" viewBox="-20 -20 40 40">
              <circle className={css.stars} r="20" />
            </symbol>

            <radialGradient
              id="sky-gradient"
              cx="737.45"
              cy="94.64"
              r="800.05"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.03" stopColor="#ffd7ac" />
              <stop offset="0.5" stopColor="#f8a7a1" />
              <stop offset="0.92" stopColor="#6d5d91" />
            </radialGradient>

            <symbol id="sky" viewBox="0 0 1000 1000">
              <rect width="1000" height="1000" fill="url(#sky-gradient)" />
              <circle id="sun" className={css.sun} cx="658" cy="265" r="62" />
              <use
                width="10"
                height="10"
                x="350"
                y="550"
                href="#star"
                className={css.star}
              />
              <use
                width="10"
                height="10"
                x="470"
                y="650"
                href="#star"
                className={css.star}
              />
              <use
                width="8"
                height="8"
                x="430"
                y="750"
                href="#star"
                className={css.star}
              />
              <use
                width="9"
                height="9"
                x="250"
                y="650"
                href="#star"
                className={css.star}
              />
              <use
                width="9"
                height="9"
                x="590"
                y="780"
                href="#star"
                className={css.star}
              />
              <use
                width="5"
                height="5"
                x="700"
                y="750"
                href="#star"
                className={css.star}
              />
              <use
                width="4"
                height="4"
                x="300"
                y="800"
                href="#star"
                className={css.star}
              />
            </symbol>
          </defs>

          <g id="planet" clipPath="url(#clipPath)">
            <use href="#sky" className={css.sky}></use>
            <g clipPath="url(#reflection)" className={css.reflection}>
              <use href="#sky" className={css.sky}></use>
              <rect
                id="ocean_light"
                className={css.ocean}
                width="1000"
                height="500"
              />
            </g>
            <path
              className={css.hill_reflection}
              d="M638 547H457l51-32H-22l294 148 35-22 148 71 183-165"
            />
            <path className={css.hill_back} d="M-22 526l294-177 236 177H-22" />
            <path className={css.hill} d="M108 547l347-159 183 159H108" />
          </g>
        </svg>
      </div>
      <div style={{ marginTop: '-20px' }}>
        <p className={css.text}>
          <b style={{ fontSize: '22px' }}>Sunset</b>
        </p>
        <p className={css.text}>
          {hourset} : {minuteset} GMT +0000
        </p>
      </div>
    </div>
  );
};

export default Sunset;
