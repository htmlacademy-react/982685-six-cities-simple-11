import Review from '../review/review';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { store } from '../../store/index';
import { fetchOfferReviwsAction } from '../../store/api-actions';
import { getCurrentOfferReviews } from '../../store/comment-process/selectors';
import sortReviews from '../../utils/sort-reviews';

type ReviewsProps = {
  hotelId: number;
};

function ListReviews({ hotelId }: ReviewsProps): JSX.Element {
  const reviews = useAppSelector(getCurrentOfferReviews);

  useEffect(() => {
    store.dispatch(fetchOfferReviwsAction(hotelId));
  }, [hotelId, reviews]);

  // Отзывы должны быть отсортированы от новых к старым (новые сверху).
  // На страницу выводится не больше 10 отзывов.
  // Количество отзывов в заголовке должно соответствовать количеству отображаемых отзывов.
  const sortedReviews = sortReviews(reviews).slice(0, 10);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortedReviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => (
          <li className="reviews__item" key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListReviews;
