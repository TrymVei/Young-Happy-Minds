import anime from 'animejs';
import { useEffect, useState } from 'react';
import style from './companies.module.css';

const Companies = () => {
  const animate = () => {
    anime({
      targets: '#carousell img',
      translateX: 600 + 2 * width,
      loop: true,
      duration: 10000,
      easing: 'linear',
    });
  };

  const [width, setWidth] = useState(0);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener('resize', handleResize);
    }
    console.log(width);
  });

  return (
    <div className={style.companies} onClick={animate}>
      <p>Noen av firmaene vi har kurset:</p>
      <div id="carousell" className={style.companies__wrapper}>
        <img src="/images/companies/companies-1.svg" alt="" />
        <img src="/images/companies/companies-2.svg" alt="" />
        <img src="/images/companies/companies-3.svg" alt="" />
        <img src="/images/companies/companies-4.svg" alt="" />
        <img src="/images/companies/companies-4.svg" alt="" />
        <img src="/images/companies/companies-1.svg" alt="" />
        <img src="/images/companies/companies-2.svg" alt="" />
        <img src="/images/companies/companies-3.svg" alt="" />
        <img src="/images/companies/companies-4.svg" alt="" />
        <img src="/images/companies/companies-1.svg" alt="" />
        <img src="/images/companies/companies-2.svg" alt="" />
        <img src="/images/companies/companies-3.svg" alt="" />
      </div>
    </div>
  );
};

export default Companies;
