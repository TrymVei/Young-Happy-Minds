import style from './courseCard.module.css';
const CourseCard = (props: {
  imgName: string;
  imgAlt: string;
  heading: string;
  label: string;
  description: string;
}) => {
  return (
    <div className={style.courseCard}>
      <img src={'/images/' + props.imgName + '.png'} alt={props.imgAlt} />
      <div className={style.courseCard__container}>
        <div className={style.courseCard__flex}>
          <h3>{props.heading}</h3>
          <p className={style.corseCard__label}>{props.label}</p>
        </div>
        <p className={style.courseCard__description}>{props.description}</p>
        <button>
          Mer Info
          <img src="/images/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
