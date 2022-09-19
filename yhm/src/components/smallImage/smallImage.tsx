import style from './smallImage.module.css';
const SmallImage = (props: {
  imgSrc: string;
  imgAlt: string;
  caption: string;
}) => {
  return (
    <div className={style.smallImage}>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <p>{props.caption}</p>
    </div>
  );
};

export default SmallImage;
