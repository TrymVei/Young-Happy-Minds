import CustomerReview from '../../../components/customerReview/customerReviev';
import { Reviews } from '../../../utils/reviews';
import { Review } from '../../../utils/types';
import style from './reviewSection.module.css';

const ReviewsSection = () => {
  const reviews: Review[] = Reviews();

  return (
    <div className={style.reviewSection}>
      {reviews.map((review) => (
        <div>
          <CustomerReview review={review} />
        </div>
      ))}
    </div>
  );
};

export default ReviewsSection;
