import anime from 'animejs';
import { useState } from 'react';
import style from './test.module.css';

const Test = () => {
  const [hidde, setHidden] = useState(true);

  const animate = () => {
    if (hidde) {
      anime({
        targets: '#test',
        translateX: -1000,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: false,
      });
    } else {
      anime({
        targets: '#test',
        translateX: 1000,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: false,
      });
    }
    setHidden(!hidde);
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        id="test"
        className={style.test}
        style={{
          position: 'relative',
          right: '-1000px',
          backgroundColor: 'red',
          width: '100%',
          height: '300px',
        }}
      >
        <p>test</p>
      </div>
      <button onClick={animate}>trykk</button>
      <p>{hidde}</p>
    </div>
  );
};

export default Test;
