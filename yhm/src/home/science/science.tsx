import ReadMore from '../../components/readMore/readMore';
import style from './science.module.css';
const Science = () => {
  return (
    <div className={style.science}>
      <img src="/images/science-image.png" alt="" />
      <div className={style.science__wrapper}>
        <h2>Utviklet med fageksperter</h2>
        <p>
          Positiv psykologi bygger bro mellom selvhjelp og forskning. Vårt
          materiell er utviklet i samarbeid med annerkjente forskere innen
          feltet, fra blant annet __________ og __________.
        </p>
        <div className={style.science__readMore}>
          <ReadMore />
        </div>
      </div>
    </div>
  );
};

export default Science;
