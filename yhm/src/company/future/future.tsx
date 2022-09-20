import style from './future.module.css';
const Future = () => {
  return (
    <div className={style.future}>
      <img src="/images/company-image-2.svg" alt="" />
      <div className={style.future__wrapper}>
        <h2>Fremtidens ferdigheter</h2>
        <p>
          Forskning peker mot at mange av jobbene som baserer seg på tekniske
          ferdigheter vil bli automatisert i løpet av de kommende årene. Med
          dette vil fremtidens arbeidsmarked i større grad verdsette
          mellommenneskelige og kognitive ferdigheter.*
        </p>
        <p>
          I våre kurs jobber vi med å styrke nettopp disse sosiale og
          emosjonelle ferdighetene. Deltagerne vil bli mer bevisst på hvordan de
          oppnår mestring, glede og trivsel – noe som også vil ha en betydelig
          positiv effekt på arbeidsplassen.
        </p>
        <p className="source">
          * Kilde: Future of Jobs, World Economic Forum, 2016
        </p>
      </div>
    </div>
  );
};

export default Future;
