import anime from 'animejs';
import style from './SunAnimation.module.css';

const SunAnimation = () => {
  const animation = () => {
    anime({
      targets: '#sunLight',
      //   strokeWidth: '20px',

      translateY: '20px',
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true,
      rotate: 360,
    });

    anime({
      targets: '#sun',
      loop: true,
      easing: 'linear',
      duration: 5000,
    });
  };
  return (
    <div className={style.sunAnimation}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="196"
        height="200"
        viewBox="0 0 196 200"
        fill="none"
      >
        <path
          id="sunLight"
          d="M98 10.3473V3"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight"
          d="M161.333 36.7977L165.652 30.9198"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight"
          d="M185.803 99.9847H193"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight"
          d="M161.333 163.172L165.652 169.05"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight"
          d="M98 189.622V196.97"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight"
          d="M36.1062 163.172L30.3486 169.05"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight"
          d="M10.197 99.9847H3"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="sunLight"
          d="M36.1062 36.7977L30.3486 30.9198"
          stroke="#FFD526"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default SunAnimation;
