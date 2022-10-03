import anime from 'animejs';
import { useEffect, useState } from 'react';
import style from './companies.module.css';

const Companies = () => {
  const animate = () => {
    anime({
      targets: '#carousell img',
      translateX: 600 + 2 * width,
      loop: true,
      duration: 40000,
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

      <div className={style.carousel__container} onClick={animate}>
        <div className={style.carousel__wrapper}>
          <div className={style.carousel__content__wrapper}>
            <div id="carousell" className={style.carousel__content}>
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
        </div>
      </div>
    </div>
  );
};

export default Companies;
