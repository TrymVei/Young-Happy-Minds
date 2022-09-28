import anime from 'animejs';
import style from './companies.module.css';
const Companies = () => {
  const animate = () => {
    anime({
      targets: '#carousell img',
      translateX: 2000,
      loop: true,
      duration: 15000,
      easing: 'linear',
    });
  };
  return (
    <div id="section" className={style.companies}>
      <p>Noen av firmaene vi har kurset:</p>
      <div
        onClick={animate}
        id="carousell"
        className={style.companies__wrapper}
      >
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
