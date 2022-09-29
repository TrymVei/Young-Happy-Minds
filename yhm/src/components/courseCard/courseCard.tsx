import { useEffect, useState } from 'react';
import Button from '../button/button';
import style from './courseCard.module.css';
const CourseCard = (props: {
  imgName: string;
  imgAlt: string;
  heading: string;
  label: string;
  description: string;
  href?: string;
}) => {
  const [isDesktop, setIsDesktop] = useState(true);

  const handleResize = () => {
    if (window.matchMedia('(max-width: 1350px)').matches) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  };

  useEffect(() => {
    if (window) {
      if (window.matchMedia('(max-width: 1350)').matches) {
        setIsDesktop(false);
      }
      window.addEventListener('resize', handleResize);
    }
  }, []);

  if (isDesktop) {
    return (
      <div className={style.courseCard}>
        <img
          className={style.courseCard__image}
          src={'/images/' + props.imgName + '.png'}
          alt={props.imgAlt}
        />
        <div className={style.courseCard__container}>
          <div className={style.courseCard__flex}>
            <p>{props.heading}</p>
            <p className={style.corseCard__label}>{props.label}</p>
          </div>
          <p className="smallText">{props.description}</p>
          <Button
            color={'#10534F'}
            bgColor={'#ffd526'}
            text={'Mer info'}
            big={false}
            href={props.href}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.courseCard}>
        <div className={style.courseCard__flex}>
          <p>{props.heading}</p>
          <p className={style.corseCard__label}>{props.label}</p>
        </div>
        <div className={style.courseCard__wrapper}>
          <img
            className={style.courseCard__image}
            src={'/images/' + props.imgName + '.png'}
            alt={props.imgAlt}
          />
          <div className={style.courseCard__container}>
            <p className="smallText">{props.description}</p>
            <Button
              color={'#10534F'}
              bgColor={'#ffd526'}
              text={'Mer info'}
              big={false}
              href={props.href}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default CourseCard;
