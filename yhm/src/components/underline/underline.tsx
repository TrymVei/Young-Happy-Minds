import { Props } from '../../utils/types';
import style from './underline.module.css';

const Underline: React.FunctionComponent<Props> = (
  props: Props,
  underlineColor: string
) => {
  return (
    <p
      style={{ textDecorationColor: underlineColor }}
      className={style.underline}
    >
      {props.children}
    </p>
  );
};

export default Underline;
