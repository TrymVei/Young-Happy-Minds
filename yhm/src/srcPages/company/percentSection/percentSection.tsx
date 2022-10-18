import anime from 'animejs';
import { useEffect, useState } from 'react';
import Percent from '../../../components/percent/percent';
import style from './percentSection.module.css';

const PercentSection = () => {
  const [animationStart, setAnimationStart] = useState(214);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 900) {
        setAnimationStart(156);
      }
    }
  }, []);

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
    console.log(position > animationStart && position < animationStart + 10);
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

  return (
    <div id="section" className={style.percentSection}>
      <div>
        <h3>De ansatte som føler mest glede er...</h3>
        <div className={style.percentSection__grid}>
          <Percent
            percent={50}
            text={'mer motivert enn sine kollegaer'}
            percentColor={'#D1EACA'}
            textColor={'#F7FDF5'}
            id="1"
            animationStart={animationStart}
          />
          <Percent
            percent={155}
            text={'mer fornøyd med jobben sin'}
            percentColor={'#D1EACA'}
            textColor={'#F7FDF5'}
            id="2"
            animationStart={animationStart}
          />
          <Percent
            percent={50}
            text={'mer produktive'}
            percentColor={'#D1EACA'}
            textColor={'#F7FDF5'}
            id="3"
            animationStart={animationStart}
          />
          <Percent
            percent={108}
            text={'mer engasjerte'}
            percentColor={'#D1EACA'}
            textColor={'#F7FDF5'}
            id="4"
            animationStart={animationStart}
          />
        </div>
        <p className="source">
          *Basert på sesultater fra fokusgrupper med 3,000 deltagere i 79 land,
          Jessica Pryce-Jones, forfatter av boken “Happiness”
        </p>
      </div>
      <div>
        <img src="/images/company-image-1.svg" alt="" />
      </div>
    </div>
  );
};

export default PercentSection;
