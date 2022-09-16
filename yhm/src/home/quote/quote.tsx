import style from './quote.module.css';
const Quote = () => {
  return (
    <div className={style.quote}>
      <img src="/images/quote-image.png" alt="Portrettbilder" />
      <div>
        <p>
          “Jeg digger materialet, stemningen og godfølelsen dette kurset har
          bidratt med. Det har vært positivt for både meg selv, barna mine, mann
          og andre jeg deler nye tankemønstre og oppdagelser med.”
        </p>
        <p> - Tonje, deltager</p>
      </div>
    </div>
  );
};

export default Quote;
