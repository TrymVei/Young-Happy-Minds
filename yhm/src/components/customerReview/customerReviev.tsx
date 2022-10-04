import { Review } from '../../utils/types';
import style from './customerReview.module.css';

const CustomerReview = (props: { review: Review }) => {
  return (
    <div className={style.review}>
      <p className="smallText">{props.review.review}</p>
      <div className={style.review__wrapper}>
        <p className="smallesText">
          -{props.review.name} ({props.review.age} {props.review.date})
        </p>
        <div>
          {Array.from(Array(props.review.stars), (e, i) => {
            return <img src="/images/star.svg" key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
