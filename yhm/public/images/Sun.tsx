import anime from 'animejs';
import { useEffect } from 'react';

const Sun = () => {
  const animation = () => {
    anime({
      targets: '#sunlight1',
      d: ['M44.0882 107.955L38.4562 109.033', 'M44.0882 107.955L17 116'],
      duration: 1000,
      loop: true,
      direction: 'alternate',
      easing: 'linear',
    });
    anime({
      targets: '#sunlight2',
      d: ['M54.2935 132.76L48.8512 136.291', 'M54.2936 132.76L37 142'],
      duration: 1000,
      loop: true,
      direction: 'alternate',
      easing: 'linear',
    });
    anime({
      targets: '#sunlight3',
      d: ['M73.6375 152.507L69.9947 157.876', 'M73.6375 152.507L58 175'],
      duration: 1000,
      loop: true,
      direction: 'alternate',
      easing: 'linear',
    });
    anime({
      targets: '#sunlight4',
      d: ['M98.2271 163.222L97.0327 168.831', 'M98.2271 163.222L94 175'],
      duration: 1000,
      loop: true,
      direction: 'alternate',
      easing: 'linear',
    });
    anime({
      targets: '#sunlight5',
      d: ['M125.955 163.508L127.033 169.14', 'M125.955 163.509L131 186'],
      duration: 1000,
      loop: true,
      direction: 'alternate',
      easing: 'linear',
    });
    anime({
      targets: '#sunlight6',
      d: ['M44.3743 80.2271L38.7658 79.0327', 'M44.3743 80.2271L31 76'],
      duration: 1000,
      loop: true,
      direction: 'alternate',
      easing: 'linear',
    });
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="218"
      height="195"
      viewBox="0 0 218 195"
      fill="none"
    >
      <path
        d="M99.6417 26.088L98.5634 20.4561"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M153.085 36.8733L155.602 31.7206"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M181.509 81.6418L187.141 80.5635"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M171.634 133.744L175.876 137.602"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="sunlight5"
        d="M125.955 163.508L127.033 169.14"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="sunlight3"
        d="M73.6375 152.507L69.9947 157.876"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="sunlight1"
        d="M44.0882 107.955L38.4562 109.033"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M55.0893 55.6373L49.721 51.9944"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M127.369 26.3742L128.564 20.7656"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M172.425 57.0752L176.746 53.305"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M181.223 109.37L186.831 110.564"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M151.882 153.542L154.292 158.746"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="sunlight4"
        d="M98.2271 163.222L97.0327 168.831"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="sunlight2"
        d="M54.2935 132.76L48.8512 136.291"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="sunlight6"
        d="M44.3743 80.2271L38.7658 79.0327"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M74.8368 36.2934L71.3054 30.8511"
        stroke="#FFD526"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Sun;
