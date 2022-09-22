import { useState } from 'react';
import style from './accordion.module.css';

const Accordion = (props: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={style.accordion} onClick={() => setIsOpen(!isOpen)}>
      <p style={{ transition: 'all 0.3s ease-in-out' }}>{props.question}</p>
      {isOpen ? <p>{props.answer}</p> : <></>}
    </div>
  );
};

export default Accordion;
