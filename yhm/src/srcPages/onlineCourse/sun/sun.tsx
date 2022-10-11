import SunAnimation from '../../../utils/sun/sunAnimation';
import style from './sun.module.css';
const Sun = () => {
  return (
    <div className={style.sun}>
      <SunAnimation />
    </div>
  );
};

export default Sun;
