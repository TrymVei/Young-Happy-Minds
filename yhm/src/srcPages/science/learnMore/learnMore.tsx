import style from './learnMore.module.css';

const LearnMore = () => {
  return (
    <section className={style.learnMore}>
      <div className={style.learnMore__green_box}>
        <h2>Vil du lære mer?</h2>
        <div className={style.learnMore__wrapper}>
          <div>
            <p>NYTTIGE LENKER:</p>
            <ul>
              <li>
                <a href="">Lenke</a>
              </li>
              <li>
                <a href="">Lenke</a>
              </li>
              <li>
                <a href="">Lenke</a>
              </li>
              <li>
                <a href="">Lenke</a>
              </li>
              <li>
                <a href="">Lenke</a>
              </li>
              <li>
                <a href="">Lenke</a>
              </li>
            </ul>
          </div>
          <div>
            <p>BØKER OM EMNET:</p>
            <p>
              <a href="">Happier-Tal ben Shar</a>
            </p>
            <p>
              <a href="">Ekte Lykke - Martin Seligman</a>
            </p>
            <p>
              <a href="">The Happiness Advantage - Shawn Achor</a>
            </p>
            <p>
              <a href="">Flyt - Mihaly Csikszentmihalyi</a>
            </p>
            <p>
              <a href="">Positivitet - Barbara Fredrickson</a>
            </p>
            <p>
              <a href="">Happy Money - Elizabeth Dunn</a>
            </p>
            <p>
              <a href="">The How of Happiness - Sonja Lyubomirsky</a>
            </p>
          </div>
        </div>
        <div className={style.learnMore__ourSources}>
          <h3>VÅRE KILDER</h3>
          <ul>
            <li>
              <a href="">Mer livsglede</a>
            </li>
            <li>
              <a href="">
                Mer engasjement og lyst til å gjøre det du elsker å gjøre
              </a>
            </li>
            <li>
              <a href="">Bli tryggere på egne styrker og verdier</a>
            </li>
            <li>
              <a href="">Å bli mer robust i møte med motgang</a>
            </li>
            <li>
              <a href="">En mer positiv hverdag</a>
            </li>
            <li>
              <a href="">Bedre relasjoner</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
