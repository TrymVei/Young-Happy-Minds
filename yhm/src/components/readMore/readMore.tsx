import style from './readMore.module.css';
const ReadMore = (props: { onClick: Function }) => {
  return (
    <div className={style.readMore}>
      <p onClick={(e) => props.onClick(e)}>
        <a className="menyBold">Les mer</a>
        <img src="/images/arrow.svg" alt="Les mer pil" />
      </p>
    </div>
  );
};

export default ReadMore;
