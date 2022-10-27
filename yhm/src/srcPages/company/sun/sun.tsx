import SunAnimation from '../../../utils/sun/sunAnimation';
import style from './sun.module.css';

const Sun = () => {
  return (
    <div id="section" className={style.sun}>
      <div className={style.sun__wrapper}>
        <SunAnimation />
        <p className="ingress">
          Kurs med Young Happy Minds gir en grundig introduksjon til positiv
          psykologi, samt konkrete teknikker og verktøy for å anvende teorien.
          Vi fokuserer på den enkeltes styrker, på å øke robusthet og på
          generell lykke. Fordi gladere folk gir økt trivsel og effektivitet på
          arbeidsplassen.
        </p>
      </div>
    </div>
  );
};

export default Sun;
