import { useEffect, useState } from 'react';
import Percent from '../../../components/percent/percent';
import style from './results.module.css';
const Results = () => {
  const [animationStart, setAnimationStart] = useState(900);

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 900) {
        setAnimationStart(1400);
      }
    }
  }, []);
  return (
    <div id="section" className={style.results}>
      <div className={style.result__flex}>
        <div className={style.result__flex__text}>
          <h2>Målte resultater etter 10 uker</h2>
          <p>
            Resultatene viser endring etter kun 10 uker med kursing. Basert på
            annen forskning kan vi anta at denne endringen vil fortsette å øke
            ved videre kursing og bruk av metodene.
          </p>
          <p className="source">
            *Deltagere på kurset ble målt mot en kontrollgruppe før og etter 10
            uker med kursing. Målingene ble gjort med måleverktøy for velvære
            utviklet av New Philanthropy Capital´s Well-being measure. Det var
            ikke betydelig endring hos kontrollgruppen.
          </p>
        </div>
        <div className={style.result__grid}>
          <Percent
            percent={20}
            text="økt livskvalitet etter programmet"
            percentColor={'#0D534F'}
            textColor={'#0D534F'}
            id="1"
            animationStart={animationStart}
          />
          <Percent
            percent={12}
            text="bedre emosjonelt velvære"
            percentColor={'#0D534F'}
            textColor={'#0D534F'}
            id="2"
            animationStart={animationStart}
          />
          <Percent
            percent={14}
            text="forbedring av selvfølelse"
            percentColor={'#0D534F'}
            textColor={'#0D534F'}
            id="3"
            animationStart={animationStart}
          />
          <Percent
            percent={12}
            text="forbedring av utholdenhet"
            percentColor={'#0D534F'}
            textColor={'#0D534F'}
            id="4"
            animationStart={animationStart}
          />
        </div>
        <div className={style.mobile}>
          <p className="source">
            *Deltagere på kurset ble målt mot en kontrollgruppe før og etter 10
            uker med kursing. Målingene ble gjort med måleverktøy for velvære
            utviklet av New Philanthropy Capital´s Well-being measure. Det var
            ikke betydelig endring hos kontrollgruppen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
