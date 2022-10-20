import BigStar from './bigStar';
import MediumStar from './mediumStar';
import SmallStar from './smallStar';
import style from './stars.module.css';
const Stars = () => {
  return (
    <>
      <div className={style.bigStar}>
        <BigStar />
      </div>
      <div className={style.smallStar}>
        <SmallStar />
      </div>
      <div className={style.mediumStar}>
        <MediumStar />
      </div>
    </>
  );
};

export default Stars;
