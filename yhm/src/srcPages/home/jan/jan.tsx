import style from './jan.module.css';

const Jan = () => {
  return (
    <div id="section" className={style.jan}>
      <div className={style.jan__flex}>
        <img
          className={style.jan__img}
          src="/images/review/review-1.png"
          alt=""
        />
        <div className={style.jan__wrapper}>
          <div className={style.jan__rating_name}>
            <div>
              <img src="/images/star.svg" alt="star" />
              <img src="/images/star.svg" alt="star" />
              <img src="/images/star.svg" alt="star" />
              <img src="/images/star.svg" alt="star" />
              <img src="/images/star.svg" alt="star" />
            </div>
            <p className="smallText">- Jan (51)</p>
          </div>
          <p className="ingress">
            “Jeg trengte noen triks for å komme ut av «sumpen», og dette kurset
            har vært veldig bra! Jeg gledet meg til hver eneste modul.
            Innholdsrikt og morsomt. Det dere går gjennom på kurset skulle vært
            pensum på skolen!”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jan;
