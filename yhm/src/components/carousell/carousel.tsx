import anime from 'animejs';
import { useEffect, useState } from 'react';
import { Props } from '../../utils/types';
import style from './carousel.module.css';
const Carousel: React.FunctionComponent<Props> = (props: Props) => {
  const animate = () => {
    anime({
      targets: '#carousell img',
      translateX: 2000,
      loop: true,
      duration: 10000,
      easing: 'linear',
    });
  };

  return (
    <div className={style.carousel__container} onClick={animate}>
      <div className={style.carousel__wrapper}>
        <div className={style.carousel__content__wrapper}>
          <div id="carousell" className={style.carousel__content}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
