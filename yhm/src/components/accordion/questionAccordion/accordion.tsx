import anime from 'animejs';
import { useState } from 'react';
import style from './accordion.module.css';

const Accordion = (props: { question: string; answer: string; id: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
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
    <div className={style.accordion}>
      <div className={style.accordion__flex}>
        <p id="boldJakarta22" style={{ transition: 'all 0.3s ease-in-out' }}>
          {props.question}
        </p>
        <img
          id={'open' + props.id}
          onClick={handleOnClick}
          src="/images/openSymbol.svg"
          alt="open"
        />
      </div>
      {isOpen ? (
        <p className={style.accordion__answer}>{props.answer}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Accordion;
