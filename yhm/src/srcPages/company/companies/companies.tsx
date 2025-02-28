import style from "./companies.module.css";

const Companies = () => {
  return (
    <div className={style.companies}>
      <div className={style.carousel}>
        <div id="carousell" className={style.slider}>
          <div className={style.slide__track}>
            <div className={style.slide}>
              <img src="/images/companies/companies-1.svg" alt="" />
            </div>
            <div className={style.slide}>
              <img src="/images/companies/companies-2.svg" alt="" />
            </div>
            <div className={style.slide}>
              <img src="/images/companies/companies-3.svg" alt="" />
            </div>
            <div className={style.slide}>
              <img src="/images/companies/companies-4.svg" alt="" />
            </div>
            <div className={style.slide}>
              <img src="/images/companies/companies-5.svg" alt="" />
            </div>
            <div className={style.slide}>
              <img src="/images/companies/companies-6.svg" alt="" />
            </div>
            <div className={style.slide}>
              <img src="/images/companies/companies-1.svg" alt="" />
            </div>
            <div className={style.slide}>
              <img src="/images/companies/companies-2.svg" alt="" />
            </div>
            <div className={style.slide}>
              <img src="/images/companies/companies-3.svg" alt="" />
            </div>
            <div className={style.slide}>
              <img src="/images/companies/companies-4.svg" alt="" />
            </div>
            <div className={style.slide}>
              <img src="/images/companies/companies-5.svg" alt="" />
            </div>
            <div className={style.slide}>
              <img src="/images/companies/companies-6.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
