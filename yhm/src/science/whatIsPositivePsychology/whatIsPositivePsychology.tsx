import style from './whatIsPositivePsychology.module.css';
const WhatIsPositivePsychology = () => {
  return (
    <div className={style.whatIsPositivePsychology}>
      <div className={style.whatIsPositivePsychology__wrapper}>
        <h2>Hva er egentlig positiv psykologi?</h2>
        <p>
          Mange tenker at positiv psykologi bare handler om å “tenke positivt”,
          og å smile uansett hva. <br /> Positiv psykologi fokuserer på å
          forebygge, styrke og bygge på det som er bra slik at man øker
          livsgleden, og er bedre rustet for livets uforutsigbarheter.
        </p>
        <p>
          I positiv psykologi brukes kunnskapen fra forskning til å utarbeide
          konkrete metoder og verktøy. Vi kaller disse metodene “Happy Hacks”.
        </p>
      </div>
      <div className={style.whatIsPositivePsychology__flex}>
        <img src="/images/martin-seligman.svg" alt="Dr martin seligman" />
        <div>
          <p>
            “What makes life worth living is much more than the absence of the
            negative.”
          </p>
          <p>- Dr. Martin Seligman, grunnleggeren av positiv psykologi</p>
        </div>
      </div>
    </div>
  );
};

export default WhatIsPositivePsychology;
