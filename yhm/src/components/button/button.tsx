import style from '../button/button.module.css';
const Button = (props: {
  color: string;
  bgColor: string;
  text: string;
  big: boolean;
}) => {
  return (
    <button
      style={{ backgroundColor: props.bgColor, color: props.color }}
      className={props.big ? style.button : style.buttonSmall}
    >
      {props.text}
      {props.big ? (
        <img src="/images/arrow.svg" alt="arrow" />
      ) : (
        <img src="/images/smallArrow.svg" alt="arrow" />
      )}
    </button>
  );
};

export default Button;
