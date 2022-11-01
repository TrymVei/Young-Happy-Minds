import anime from 'animejs';
import { useEffect, useState } from 'react';
import Percent from '../../../components/percent/percent';
import style from './results.module.css';
const Results = () => {
  const [animationStart, setAnimationStart] = useState(3600);
  const [loaded, setLoaded] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (
      position > animationStart &&
      position < animationStart + 50 &&
      !loaded
    ) {
      animation();
      setLoaded(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const animation = () => {
    const tl = anime.timeline({
      easing: 'linear',
      round: true,
      duration: 500,
    });

    tl.add({
      targets: '#percent1',
      innerText: [0, 20],
      offset: '-=500',
    });
    tl.add({
      targets: '#percent2',
      innerText: [0, 12],
      offset: '-=500',
    });
    tl.add({
      targets: '#percent3',
      innerText: [0, 14],
      offset: '-=500',
    });
    tl.add({
      targets: '#percent4',
      innerText: [0, 12],
      offset: '-=500',
    });
  };

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
        <div id="percents" className={style.result__grid}>
          <Percent
            percent={20}
            text="økt livskvalitet etter programmet"
            percentColor={'#D1EACA'}
            textColor={'#F7FDF5'}
            id="1"
            animationStart={animationStart}
          />
          <Percent
            percent={12}
            text="bedre emosjonelt velvære"
            percentColor={'#D1EACA'}
            textColor={'#F7FDF5'}
            id="2"
            animationStart={animationStart}
          />
          <Percent
            percent={14}
            text="forbedring av selvfølelse"
            percentColor={'#D1EACA'}
            textColor={'#F7FDF5'}
            id="3"
            animationStart={animationStart}
          />
          <Percent
            percent={12}
            text="forbedring av utholdenhet"
            percentColor={'#D1EACA'}
            textColor={'#F7FDF5'}
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
