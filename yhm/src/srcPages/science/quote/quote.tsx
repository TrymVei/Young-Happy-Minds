import style from './quote.module.css';
const Quote = () => {
  return (
    <div id="section" className={style.quote}>
      <p className="bigQuote">
        “Det jeg personlig liker så godt med positiv psykologi er at det er
        forskningsbasert, samtidig som det er så enkelt og lett forståelig at
        alle kan ta det i bruk.”
      </p>
      <p className="source"> - Linn Sandvik, CEO Variant Oslo</p>
    </div>
  );
};

export default Quote;
