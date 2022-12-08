import Review from '../review/review';
import FormReview from '../form-review/form-review';
import { useAppSelector } from '../../hooks';
import { getSortedReviews } from '../../store/review-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus, MAX_QTY_REVIEWS } from '../../const';

type ReviewsProps = {
  hotelId: number;
};

function ListReviews({ hotelId }: ReviewsProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  // Отзывы должны быть отсортированы от новых к старым (новые сверху).
  // На страницу выводится не больше 10 отзывов.
  // Количество отзывов в заголовке должно соответствовать количеству отображаемых отзывов.
  const sortedReviews = useAppSelector(getSortedReviews).slice(0, MAX_QTY_REVIEWS);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortedReviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => (
          <li className="reviews__item" key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
      {(authorizationStatus === AuthorizationStatus.Auth) &&
      <FormReview hotelId={hotelId} />}
    </section>
  );
}

export default ListReviews;
