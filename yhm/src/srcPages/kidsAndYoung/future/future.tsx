import style from './future.module.css';
const Future = () => {
  return (
    <div className={style.future}>
      <div>
        <h2>Fremtidens ferdigheter</h2>
        <p>
          Forskning peker mot at mange av jobbene som baserer seg på tekniske
          ferdigheter vil bli automatisert i løpet av de kommende årene. Med
          dette vil fremtidens arbeidsmarked i større grad verdsette
          mellommenneskelige og kognitive ferdigheter.
        </p>
        <p>
          Kursing med Young happy minds etablerer et utgangspunkt for å bygge
          nettopp disse sosiale og emosjonelle ferdighetene. Deltagerne vil bli
          mer bevisst på hvordan de oppnår mestring, glede og trivsel på skolen,
          med seg selv, og i sosiale sammenhenger, og dermed bli bedre rustet
          for fremtiden.
        </p>
        <p className="source">
          * Kilde: Future of Jobs, World Economic Forum, 2016
        </p>
      </div>
      <div>
        <img src="/images/young.svg" alt="" />
      </div>
    </div>
  );
};

export default Future;
