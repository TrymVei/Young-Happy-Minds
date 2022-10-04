import style from '../button/button.module.css';
const Button = (props: {
  color: string;
  bgColor: string;
  text: string;
  big: boolean;
  href?: string;
  img: boolean;
}) => {
  return (
    <button
      style={{ backgroundColor: props.bgColor }}
      className={props.big ? style.button : style.buttonSmall}
    >
      <a style={{ color: props.color }} href={props.href}>
        {props.text}
      </a>
      {props.big && props.img ? (
        <img src="/images/arrow.svg" alt="arrow" />
      ) : (
        <></>
      )}
      {!props.big && props.img ? (
        <img src="/images/smallArrow.svg" alt="arrow" />
      ) : (
        <></>
      )}
    </button>
  );
};

export default Button;

export const ButtonFunction = (props: {
  color: string;
  bgColor: string;
  text: string;
  big: boolean;
  href?: string;
  img: boolean;
  onClick: Function;
}) => {
  return (
    <button
      onClick={() => props.onClick()}
      style={{ backgroundColor: props.bgColor }}
      className={props.big ? style.button : style.buttonSmall}
    >
      <a style={{ color: props.color }} href={props.href}>
        {props.text}
      </a>
      {props.big && props.img ? (
        <img src="/images/arrow.svg" alt="arrow" />
      ) : (
        <></>
      )}
      {!props.big && props.img ? (
        <img src="/images/smallArrow.svg" alt="arrow" />
      ) : (
        <></>
      )}
    </button>
  );
};
