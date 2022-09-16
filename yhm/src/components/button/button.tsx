import style from '../button/button.module.css';
const Button = (props: { color: string; bgColor: string; text: string }) => {
  return (
    <button
      style={{ backgroundColor: props.bgColor, color: props.color }}
      className={style.button}
    >
      {props.text}
      <img src="/images/arrow.svg" alt="arrow" />
    </button>
  );
};

export default Button;
