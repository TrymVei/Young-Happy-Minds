import style from '../button/button.module.css';
const Button = (props: {
  color: string;
  bgColor: string;
  text: string;
  big: boolean;
  href?: string;
}) => {
  return (
    <button
      style={{ backgroundColor: props.bgColor }}
      className={props.big ? style.button : style.buttonSmall}
    >
      <a style={{ color: props.color }} href={props.href}>
        {props.text}
      </a>
      {props.big ? (
        <img src="/images/arrow.svg" alt="arrow" />
      ) : (
        <img src="/images/smallArrow.svg" alt="arrow" />
      )}
    </button>
  );
};

export default Button;
