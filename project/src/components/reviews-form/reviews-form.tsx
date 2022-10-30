import { useState } from 'react';
import { NewReview } from '../../types/types';

function ReviewsForm(): JSX.Element {
  const [review, setReview] = useState<NewReview>({
    comment: '',
    rating: 0,
  });

  const handleReviewFormInputСhange = (evt: React.ChangeEvent<HTMLInputElement>) => setReview({...review, rating: +evt.target.value});
  const handleReviewFormTextAreaСhange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => setReview({...review, comment: evt.target.value});

  return (
    <form className="reviews__form form" method="post" action="https://echo.htmlacademy.ru/">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          type="radio"
          name="rating"
          id="5-stars"
          value="5"
          onChange={handleReviewFormInputСhange}
          checked={review.rating === 5}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          type="radio"
          name="rating"
          id="4-stars"
          value="4"
          onChange={handleReviewFormInputСhange}
          checked={review.rating === 4}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          type="radio"
          name="rating"
          id="3-stars"
          value="3"
          onChange={handleReviewFormInputСhange}
          checked={review.rating === 3}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          type="radio"
          name="rating"
          id="2-stars"
          value="2"
          onChange={handleReviewFormInputСhange}
          checked={review.rating === 2}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          type="radio"
          name="rating"
          id="1-star"
          value="1"
          onChange={handleReviewFormInputСhange}
          checked={review.rating === 1}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        name="comment"
        id="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.comment}
        onChange={handleReviewFormTextAreaСhange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={(review.rating === 0) || (review.comment.length < 50) || (review.comment.length >= 300)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
