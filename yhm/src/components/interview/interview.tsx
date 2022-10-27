import style from './interview.module.css';

const Interview = (props: {
  name: string;
  age: number;
  text: string;
  stars: number;
}) => {
  return (
    <div id="section" className={style.interview}>
      <div className={style.interview__flex}>
        <img
          className={style.interview__img}
          src={`./images/interview/${props.name}.png`}
        />
        <div className={style.interview__wrapper}>
          <div className={style.interview__rating_name}>
            <div>
              {Array.from(Array(props.stars), (e, i) => {
                return <img src="/images/star.svg" alt="star" key={i} />;
              })}
            </div>
            <p className="smallText">
              - {props.name} ({props.age})
            </p>
          </div>
          <p className="ingress">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Interview;
