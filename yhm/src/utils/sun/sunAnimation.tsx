import anime from 'animejs';
import { useEffect } from 'react';
import style from './sunAnimation.module.css';

const SunAnimation = () => {
  const animation = () => {
    anime({
      targets: '#sunLight1',

      d: [
        {
          value: ['M116 30.3473V23', 'M116 30V20'],
        },
      ],
      easing: 'linear',
      loop: true,
      direction: 'alternate',
      duration: 400,
    });
    anime({
      targets: '#sunLight2',

      d: [
        {
          value: ['M179.333 56.7978L183.652 50.9199', 'M179 57L192 40'],
        },
      ],
      easing: 'linear',
      loop: true,
      direction: 'alternate',
      duration: 1400,
    });
    anime({
      targets: '#sunLight3',

      d: [
        {
          value: ['M203.803 119.985H211 120', 'M203.803 119.985L215 120'],
        },
      ],
      easing: 'linear',
      loop: true,
      direction: 'alternate',
      duration: 700,
    });
    anime({
      targets: '#sunLight4',

      d: [
        {
          value: ['M179.333 183.172L183.652 189.05', 'M179 183L193 201'],
        },
      ],
      easing: 'linear',
      loop: true,
      direction: 'alternate',
      duration: 1000,
    });
    anime({
      targets: '#sunLight5',

      d: [
        {
          value: ['M116 209.622V216.97', 'M116 210V220'],
        },
      ],
      easing: 'linear',
      loop: true,
      direction: 'alternate',
      duration: 2000,
    });
    anime({
      targets: '#sunLight6',

      d: [
        {
          value: ['M54.1062 183.172L48.3486 189.05', 'M54 183L41 196'],
        },
      ],
      easing: 'linear',
      loop: true,
      direction: 'alternate',
      duration: 1300,
    });
    anime({
      targets: '#sunLight7',

      d: [
        {
          value: ['M28.197 119.985H21 120', 'M28.197 119.985L10 120'],
        },
      ],
      easing: 'linear',
      loop: true,
      direction: 'alternate',
      duration: 1200,
    });
    anime({
      targets: '#sunLight8',

      d: [
        {
          value: ['M54.1062 56.7978L48.3486 50.9199', 'M54 57L38 40'],
        },
      ],
      easing: 'linear',
      loop: true,
      direction: 'alternate',
      duration: 1500,
    });
    anime({
      targets: '#sun',
      rotate: '360deg',
      easing: 'linear',
      duration: 20000,
      loop: true,
    });
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <div className={style.sunAnimation}>
      <svg
        id="sun"
        xmlns="http://www.w3.org/2000/svg"
        width="232"
        height="232"
        viewBox="0 0 232 232"
        fill="none"
      >
        <path
          id="sunLight1"
          d="M116 30.3473V23"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight2"
          d="M179.333 56.7978L183.652 50.9199"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight3"
          d="M203.803 119.985H211"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight4"
          d="M179.333 183.172L183.652 189.05"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight5"
          d="M116 209.622V216.97"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight6"
          d="M54.1062 183.172L48.3486 189.05"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight7"
          d="M28.197 119.985H21"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight8"
          d="M54.1062 56.7978L48.3486 50.9199"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 196 200"
        fill="none"
      >
        <path
          id="sunLight1"
          d="M98 10.3473V3"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight2"
          d="M161.333 36.7977L165.652 30.9198"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight3"
          d="M185.803 99.9847H193"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight4"
          d="M161.333 163.172L165.652 169.05"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight5"
          d="M98 189.622V196.97"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight6"
          d="M36.1062 163.172L30.3486 169.05"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight7"
          d="M10.197 99.9847H3"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight8"
          d="M36.1062 36.7977L30.3486 30.9198"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg> */}
    </div>
  );
};

export default SunAnimation;
