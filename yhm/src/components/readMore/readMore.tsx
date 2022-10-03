import anime from 'animejs';
import { useState } from 'react';
import style from './readMore.module.css';
export const ReadMoreFunction = (props: { onClick: Function; id: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen)
      anime({
        targets: '#open' + props.id,
        rotate: '0.625turn',
      });
    else {
      anime({
        targets: '#open' + props.id,
        rotate: '0',
      });
    }
  };

  return (
    <div onClick={handleClick} className={style.readMore}>
      <p
        onClick={(e) => {
          props.onClick(e);
        }}
      >
        <a className="menyBold">Les mer</a>
        <img
          id={'open' + props.id}
          src="/images/openSymbol.svg"
          alt="Les mer pil"
        />
      </p>
    </div>
  );
};

const ReadMore = (props: { href: string }) => {
  return (
    <div className={style.readMore}>
      <p>
        <a href={props.href} className="menyBold">
          Les mer
        </a>
        <img src="/images/arrow.svg" alt="Les mer pil" />
      </p>
    </div>
  );
};

export default ReadMore;
