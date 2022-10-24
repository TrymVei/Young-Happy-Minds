import { useEffect, useState } from 'react';
import Button from '../button/button';
import style from './courseCard.module.css';
const CourseCard = (props: {
  imgName: string;
  imgAlt: string;
  heading: string;
  description: string;
  href?: string;
  liItems?: string[];
}) => {
  const [isDesktop, setIsDesktop] = useState(false);

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
            <p className={style.courseCard_heading}>{props.heading}</p>
          </div>
          <p className="smallText">{props.description}</p>
          <ul>
            {props.liItems?.map((item) => {
              return <li className="smallText">{item}</li>;
            })}
          </ul>
          <Button
            color={'#10534F'}
            bgColor={'#ffd526'}
            text={'Mer info'}
            big={false}
            href={props.href}
            img={true}
            hoverBgColor={'#ffd526'}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.courseCard}>
        <div className={style.courseCard__flex}></div>
        <div className={style.courseCard__wrapper}>
          <img
            className={style.courseCard__image}
            src={'/images/' + props.imgName + '.png'}
            alt={props.imgAlt}
          />
          <div className={style.courseCard__container}>
            <p>{props.heading}</p>
            <p className="smallText">{props.description}</p>
            <ul>
              {props.liItems?.map((item) => {
                return <li className="smallText">{item}</li>;
              })}
            </ul>
            <Button
              color={'#10534F'}
              bgColor={'#ffd526'}
              text={'Mer info'}
              big={false}
              href={props.href}
              img={true}
              hoverBgColor={'#ffd526'}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default CourseCard;
