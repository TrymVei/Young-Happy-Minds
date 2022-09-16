import style from './percent.module.css';
const Percent = (props: { percent: number; text: string }) => {
  return (
    <div className={style.percent}>
      <h1>{props.percent}%</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default Percent;
