import style from './percent.module.css';
const Percent = (props: {
  percent: number;
  text: string;
  percentColor: string;
  textColor: string;
}) => {
  return (
    <div className={style.percent}>
      <h1 className="bigGraphic" style={{ color: props.percentColor }}>
        {props.percent}%
      </h1>
      <p style={{ color: props.textColor }} className="bodyText">
        {props.text}
      </p>
    </div>
  );
};

export default Percent;
