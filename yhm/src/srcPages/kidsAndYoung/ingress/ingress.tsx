import anime from 'animejs';

import MediumStar from '../../../utils/stars/mediumStar';
import SmallStar from '../../../utils/stars/smallStar';
import Stars from '../../../utils/stars/stars';
import style from './ingress.module.css';
const Ingress = () => {
  const rotation = (deg: number) => {
    return `${deg}deg`;
  };

  const animate = () => {
    anime({
      targets: '#starRight',
      rotate: rotation(360),
      easing: 'linear',
      duration: 20000,
      loop: true,
    });
    anime({
      targets: '#starLeft',
      rotate: rotation(-360),
      easing: 'linear',
      duration: 20000,
      loop: true,
    });
    anime({
      targets: '#starFast',
      rotate: rotation(720),
      easing: 'linear',
      duration: 10000,
      loop: true,
    });

    anime({});
  };
  return (
    <div className={style.ingress}>
      <div className={style.ingress__wrapper}>
        <h1>Glede og robusthet for barn og unge</h1>
        {/* <img onClick={animate} src="/images/stars.svg" alt="stjerner" /> */}
        <div onClick={animate}>
          <Stars />
        </div>
      </div>
      <p className="ingress" id={style.ingress}>
        Vi tilbyr kurs for barn, ungdom og studenter, samt de som jobber med
        disse gruppene. Kursene tar for seg vitenskapen bak lykke, positiv
        psykologi, på en engasjerende og interaktiv måte. Deltagerne vil også få
        en innføring i effektive verktøy og metoder for å oppnå økt trivsel og
        mer glede.
      </p>
    </div>
  );
};

export default Ingress;
