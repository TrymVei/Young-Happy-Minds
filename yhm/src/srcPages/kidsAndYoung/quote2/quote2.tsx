import style from './quote2.module.css';
const Quote2 = () => {
  return (
    <div className={style.quote2}>
      <img src="/images/perma/quote-image.svg" alt="" />
      <p className="bigQuote">
        “Det at fokuset på menneskelige styrker, utholdenhet og optimisme kan
        læres, har en enorm betydning både for samfunnet og enkeltmennesket.”
      </p>
    </div>
  );
};

export default Quote2;
