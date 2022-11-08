import Review from '../review/review';
import { ReviewsType } from '../../types/types';

type ReviewsProps = {
  reviews: ReviewsType;
};

function ListReviews({ reviews }: ReviewsProps) {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <li className="reviews__item" key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListReviews;
