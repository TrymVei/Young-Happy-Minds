import anime from 'animejs';
import { useEffect } from 'react';
import ReadMore from '../../../components/readMore/readMore';
import style from './positivePsychology.module.css';

const PositivePsychology = () => {
  const animate = () => {
    anime({
      targets: '#circularText',
      rotate: 360,
      easing: 'linear',
      loop: true,
      duration: 10000,
    });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <>
      <div className={style.positivePsychology}>
        <img
          className={style.mountain}
          src="/images/mountain-image.svg"
          alt="En person på en fjelltopp"
        />
        <div className={style.positivePsychology__wrapper}>
          <h2>Hva er positiv psykologi?</h2>
          <p>
            Positiv psykologi er en gren innen psykologien som fokuserer på å
            bygge opp den enkeltes styrker og positive sider. Alle vil før eller
            siden møte motgang og utfordringer i livet, og med verktøyene og
            metodene man får gjennom PP er man bedre rustet til å takle dem.
          </p>
          <ReadMore
            href={'/science'}
            img={'/images/arrows/whiteArrowRight.svg'}
          />
        </div>
      </div>
      <div className={style.circularText}>
        <img id="circularText" src="/images/circularText.svg" alt="" />
      </div>
    </>
  );
};

export default PositivePsychology;
