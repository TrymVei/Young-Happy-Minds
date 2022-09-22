import style from './whatIsPositivePsychology.module.css';
const WhatIsPositivePsychology = () => {
  return (
    <div id="section" className={style.whatIsPositivePsychology}>
      <div className={style.whatIsPositivePsychology__wrapper}>
        <h1>Hva er egentlig positiv psykologi?</h1>
        <p className="ingress">
          <strong>Tradisjonell psykologi</strong> fokuserer på å reparere når
          skaden allerede har skjedd. Positiv
          <strong>psykologi fokuserer</strong> på å forebygge og bygge videre på
          det som er bra. De styrkene hver enkelt har.
        </p>
        <p className="ingress">
          Alle vil før eller siden møte motgang i livet. Vår metode handler ikke
          om å “tenke positivt” og klistre på et smil. Tvert imot, den gir
          nyttige verktøy slik at man er bedre rustet til å takle livets
          uforutsigbarheter.
        </p>
        <p className="ingress">
          Positiv psykologi bygger bro mellom selvhjelp og forskning. Man bruker
          kunnskapen fra forskningen til å utarbeide konkrete metoder og verktøy
          man kan bruke. Vi kaller disse metodene “Happy Hacks”.
        </p>
      </div>
      <div className={style.whatIsPositivePsychology__flex}>
        <img src="/images/martin-seligman.svg" alt="Dr martin seligman" />
        <div>
          <p className="bigQuote">
            “What makes life worth living is much more than the absence of the
            negative.”
          </p>
          <p className="source">
            - Dr. Martin Seligman, grunnleggeren av positiv psykologi
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIsPositivePsychology;
