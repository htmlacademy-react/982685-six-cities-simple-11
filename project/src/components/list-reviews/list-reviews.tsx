import Review from '../review/review';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { store } from '../../store/index';
import { setCurrentOfferReviewsAction } from '../../store/actions';
import { fetchOfferReviwsAction } from '../../store/api-actions';

type ReviewsProps = {
  hotelId: number;
};

function ListReviews({ hotelId }: ReviewsProps): JSX.Element {
  useEffect(() => {
    store.dispatch(fetchOfferReviwsAction(hotelId));

    return () => {
      setCurrentOfferReviewsAction([]);
    };
  }, [hotelId]);

  const reviews = useAppSelector((state) => state.currentOfferReviews);

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
