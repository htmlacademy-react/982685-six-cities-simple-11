import { ReviewType } from '../../types/types';
import { getWidthRating } from '../../utils/utils';

type ReviewProps = {
  review: ReviewType;
};

function Review({ review }: ReviewProps): JSX.Element {
  const { date, rating, comment, user } = review;

  const reviewDate = new Date(date);
  const shortReviewDate = new Intl.DateTimeFormat('en-us', { month: 'long', year: 'numeric' }).format(reviewDate);

  return (
    <>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt={user.name} />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${getWidthRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{shortReviewDate}</time>
      </div>
    </>
  );
}

export default Review;
