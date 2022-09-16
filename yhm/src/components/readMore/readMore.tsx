import style from './readMore.module.css';
const ReadMore = () => {
  return (
    <div className={style.readMore}>
      <p>
        <a href="">Les mer</a>
        <img src="/images/arrow.svg" alt="Les mer pil" />
      </p>
    </div>
  );
};

export default ReadMore;
