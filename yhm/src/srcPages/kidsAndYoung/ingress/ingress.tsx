import style from './ingress.module.css';
const Ingress = () => {
  return (
    <div className={style.ingress}>
      <h1>Glede og robusthet for barn og unge</h1>
      <p className="ingress" id={style.ingress}>
        Vi tilbyr kurs for barn, ungdom og studenter, samt de som jobber med
        disse gruppene. Kursene tar for seg vitenskapen bak lykke, positiv
        psykologi, på en engasjerende og interaktiv måte. Deltagerne vil også få
        en innføring i effektive verktøy og metoder for å oppnå økt trivsel og
        mer glede.
      </p>
      <div className={style.ingress__flex}>
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
            nettopp disse sosiale og emosjonelle ferdighetene. Deltagerne vil
            bli mer bevisst på hvordan de oppnår mestring, glede og trivsel på
            skolen, med seg selv, og i sosiale sammenhenger, og dermed bli bedre
            rustet for fremtiden.
          </p>
        </div>
        <div>
          <img src="/images/young.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ingress;
