import ReadMore from '../../../components/readMore/readMore';
import style from './science.module.css';
const Science = () => {
  return (
    <div className={style.science}>
      <img src="/images/science-image.png" alt="" />
      <div className={style.science__wrapper}>
        <h2>Utviklet med fageksperter</h2>
        <p className="bodyText">
          Positiv psykologi bygger bro mellom selvhjelp og forskning. Vårt
          materiell er utviklet i samarbeid med annerkjente forskere innen
          feltet, fra blant annet Oxford University, University of Pennsylvainia
          og the US Wholebeing institute.
        </p>
        <div className={style.science__readMore}>
          <ReadMore
            href={'/science'}
            img={'/images/arrows/whiteArrowRight.svg'}
          />
        </div>
      </div>
    </div>
  );
};

export default Science;
