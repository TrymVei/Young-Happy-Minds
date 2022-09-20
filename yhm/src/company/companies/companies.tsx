import style from './companies.module.css';
const Companies = () => {
  return (
    <div className={style.companies}>
      <p>Noen av firmaene vi har kurset:</p>
      <div className={style.companies__wrapper}>
        <img src="/images/companies/companies-1.svg" alt="" />
        <img src="/images/companies/companies-2.svg" alt="" />
        <img src="/images/companies/companies-3.svg" alt="" />
        <img src="/images/companies/companies-4.svg" alt="" />
      </div>
    </div>
  );
};

export default Companies;
