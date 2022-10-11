import style from './quote2.module.css';
const Quote2 = () => {
  return (
    <div className={style.quote2}>
      <img src="/images/perma/quote-image.svg" alt="" />
      <div className={style.quote2__text}>
        <p className="bigQuote">
          “Psykologi er mye større enn bare medisin, eller å endre usunne vaner.
          Det handler om utdanning, jobb, ekteskap – til og med sport. Det jeg
          vil se er psykologer som jobber for å hjelpe folk finne styrke på alle
          disse områdene.”
        </p>
        <p className="source">
          - Dr. Martin Seligman, grunnleggeren av moderne positiv psykologi
        </p>
      </div>
    </div>
  );
};

export default Quote2;
