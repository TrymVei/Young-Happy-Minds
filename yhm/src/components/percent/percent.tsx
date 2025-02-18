import style from "./percent.module.css";
const Percent = (props: {
  percent: number;
  text: string;
  percentColor: string;
  textColor: string;
  id: string;
}) => {
  return (
    <div className={style.percent}>
      <h1
        id={"percent" + props.id}
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
