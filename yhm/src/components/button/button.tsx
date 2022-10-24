import { useState } from 'react';
import ArrowDown from '../../../public/images/arrows/arrowDown';
import ArrowRight from '../../../public/images/arrows/arrowRight';
import { Props } from '../../utils/types';
import style from '../button/button.module.css';
const Button = (props: {
  color: string;
  bgColor: string;
  text: string;
  big: boolean;
  img: boolean;
  href?: string;
  hoverColor?: string;
  hoverBgColor?: string;
}) => {
  const [toggleHover, setToggleHover] = useState(false);

  return (
    <div>
      <button
        style={
          toggleHover
            ? { backgroundColor: props.hoverBgColor }
            : { backgroundColor: props.bgColor }
        }
        className={props.big ? style.button : style.buttonSmall}
      >
        <a
          onMouseOver={() => setToggleHover(!toggleHover)}
          onMouseLeave={() => setToggleHover(!toggleHover)}
          style={
            toggleHover ? { color: props.hoverColor } : { color: props.color }
          }
          href={props.href}
        >
          {props.text}
        </a>
        {props.big && props.img ? (
          <img src="/images/arrows/arrow.svg" alt="arrow" />
        ) : (
          <></>
        )}
        {!props.big && props.img ? (
          <img src="/images/arrows/smallArrow.svg" alt="arrow" />
        ) : (
          <></>
        )}
      </button>
    </div>
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
  down?: boolean;
  href?: string;
  hoverColor?: string;
  hoverOutline?: string;
  children?: React.ReactNode;
}) => {
  const [toggleHover, setToggleHover] = useState(false);

  return (
    <button
      style={
        toggleHover
          ? { backgroundColor: props.bgColor, outline: props.hoverOutline }
          : { backgroundColor: props.bgColor, outline: '3px solid white' }
      }
      className={props.big ? style.button : style.buttonSmall}
    >
      <a
        onMouseOver={() => setToggleHover(!toggleHover)}
        onMouseLeave={() => setToggleHover(!toggleHover)}
        style={
          toggleHover ? { color: props.hoverColor } : { color: props.color }
        }
        href={props.href}
      >
        {props.text}
      </a>
      {props.down ? (
        <ArrowDown fillColor={'white'}></ArrowDown>
      ) : (
        <ArrowRight
          strokeColor={'white'}
          hoverColor={props.hoverColor}
          toggleHover={toggleHover}
        />
      )}
    </button>
  );
};
