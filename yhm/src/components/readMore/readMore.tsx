import style from './readMore.module.css';
export const ReadMoreFunction = (props: { onClick: Function }) => {
  return (
    <div className={style.readMore}>
      <p onClick={(e) => props.onClick(e)}>
        <a className="menyBold">Les mer</a>
        <img src="/images/arrow.svg" alt="Les mer pil" />
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
