import style from './whatIsPositivePsychology.module.css';
const WhatIsPositivePsychology = () => {
  return (
    <div className={style.whatIsPositivePsychology}>
      <div className={style.whatIsPositivePsychology__wrapper}>
        <h1>Hva er egentlig positiv psykologi?</h1>
        <p className="ingress">
          Mange tenker at positiv psykologi bare handler om å “tenke positivt”,
          og å smile uansett hva. <br /> Positiv psykologi fokuserer på å
          forebygge, styrke og bygge på det som er bra slik at man øker
          livsgleden, og er bedre rustet for livets uforutsigbarheter.
        </p>
        <p className="ingress">
          I positiv psykologi brukes kunnskapen fra forskning til å utarbeide
          konkrete metoder og verktøy. Vi kaller disse metodene “Happy Hacks”.
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
