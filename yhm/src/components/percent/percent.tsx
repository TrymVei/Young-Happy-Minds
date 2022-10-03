import anime from 'animejs';
import { useEffect, useState } from 'react';
import style from './percent.module.css';
const Percent = (props: {
  percent: number;
  text: string;
  percentColor: string;
  textColor: string;
  id: string;
  animationStart: number;
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(scrollPosition);

  const animation = () => {
    anime({
      targets: '#percent' + props.id,
      innerText: [0, props.percent],
      easing: 'easeInOutExpo',
      round: true,
    });
  };

  useEffect(() => {
    if (scrollPosition > props.animationStart && !loaded) {
      animation();
      console.log('ja');
      setLoaded(true);
    }
  }, [scrollPosition]);

  return (
    <div onClick={animation} className={style.percent}>
      <h1
        id={'percent' + props.id}
        className="bigGraphic"
        style={{ color: props.percentColor }}
      >
        {0}%
      </h1>
      <p style={{ color: props.textColor }} className="bodyText">
        {props.text}
      </p>
    </div>
  );
};

export default Percent;
