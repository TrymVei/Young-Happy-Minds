import style from './happyhacks.module.css';
const HappyHacks = () => {
  return (
    <div className={style.happyhacks} id="section">
      <div className={style.happyhacks__text}>
        <p>
          <span>Happy Hacks</span> - vi fokuserer på at man skal ha det gøy mens
          man lærer!
        </p>
      </div>
      <div className={style.happyhacks__images}>
        <img src="/images/happyhacks-1.png" alt="" />
        <img src="/images/happyhacks-2.png" alt="" />
        <img src="/images/happyhacks-3.png" alt="" />
      </div>
    </div>
  );
};

export default HappyHacks;
