import { Fragment, useState } from 'react';
import { NewReview } from '../../types/types';
import { RATING_UNDEFINED, REVIEW_MIN, REVIEW_MAX } from '../../const';

function FormReview(): JSX.Element {
  const [review, setReview] = useState<NewReview>({
    comment: '',
    rating: RATING_UNDEFINED,
  });

  const ratings: {value: number; title: string }[] = [
    {
      value: 5,
      title: 'perfect',
    },
    {
      value: 4,
      title: 'good',
    },
    {
      value: 3,
      title: 'not bad',
    },
    {
      value: 2,
      title: 'badly',
    },
    {
      value: 1,
      title: 'terribly',
    },
  ];

  return (
    <form className="reviews__form form" method="post" action="https://echo.htmlacademy.ru/">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          ratings.map(({ value, title }) => {
            const id = `${value}-stars`;
            return (
              <Fragment key={id}>
                <input
                  className="form__rating-input visually-hidden"
                  type="radio"
                  name="rating"
                  id={id}
                  value={value}
                  onChange={(evt) => setReview({...review, rating: +evt.target.value})}
                  checked={review.rating === value}
                />
                <label
                  className="reviews__rating-label form__rating-label"
                  htmlFor={id}
                  title={title}
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </Fragment>
            );
          })
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        name="review"
        id="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.comment}
        onChange={(evt) => setReview({...review, comment: evt.target.value})}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span>{' '}
          and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            review.rating === RATING_UNDEFINED ||
            review.comment.length < REVIEW_MIN ||
            review.comment.length >= REVIEW_MAX
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormReview;
