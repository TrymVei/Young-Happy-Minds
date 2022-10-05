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

export const FakeButton = (props: {
  color: string;
  bgColor: string;
  text: string;
  big: boolean;
}) => {
  return (
    <button
      style={{ backgroundColor: props.bgColor, outline: '3px solid white' }}
      className={props.big ? style.button : style.buttonSmall}
    >
      <a style={{ color: props.color }}>{props.text}</a>
      <img
        style={{ marginTop: '2px' }}
        src="/images/smallDownArrow.svg"
        alt="Pil som peker ned"
      />
    </button>
  );
};
