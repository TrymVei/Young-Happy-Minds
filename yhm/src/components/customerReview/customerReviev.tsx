import { Review } from '../../utils/types';
import style from './customerReview.module.css';

const CustomerReview = (props: { review: Review }) => {
  return (
    <div id="section">
      <div className={style.review}>
        <img src={props.review.imgUrl} alt="" />
        <div className={style.review__content}>
          <div className={style.review__wrapper}>
            <div className={style.stars}>
              {Array.from(Array(props.review.stars), (e, i) => {
                return <img src="/images/star.svg" key={i} />;
              })}
            </div>
            <p>
              -{props.review.name}({props.review.age})
            </p>
          </div>
          <p>“{props.review.review}”</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
