import style from './quote.module.css';
const Quote = () => {
  return (
    <div id="section" className={style.quote}>
      <p className="bigQuote">
        “Folk flest tror at lykke oppnås med sukksess, og at suksess kommer
        etter hardt arbeid. Men dette stemmer ikke: lykke er ikke et resultat av
        suksess – det er årsaken til den.”
      </p>
      <p className="source">
        - Shawn Achor, forfatter av boken The Happiness Advantage
      </p>
    </div>
  );
};

export default Quote;
