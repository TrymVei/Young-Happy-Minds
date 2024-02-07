import { Review } from "../../utils/types";
import style from "./customerReview.module.css";

const CustomerReview = (props: { review: Review }) => {
  return (
    <div className={style.review}>
      {props.review.review.map((reviewText) => (
        <p className="smallText">{reviewText}</p>
      ))}
      <div className={style.review__wrapper}>
        <p className="smallesText">
          -{props.review.name} ({props.review.age})
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
