import { Fragment, useState } from 'react';
import { NewReview } from '../../types/offers';
import { Rating, Ratings, Review } from '../../const';
import { useAppDispatch } from '../../hooks';
import { fetchSendReviewAction } from '../../store/api-actions';

type FormReviewProps = {
  hotelId: number;
}
function FormReview({ hotelId }: FormReviewProps): JSX.Element {
  const [review, setReview] = useState<NewReview>({
    comment: '',
    rating: Rating.Undefined,
  });

  const [isSendReview, setSendReview] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    setSendReview(true);
    await dispatch(fetchSendReviewAction({ id: hotelId, comment: review.comment, rating: review.rating }));
    setSendReview(false);
    setReview({ comment: '', rating: Rating.Undefined });
  };

  return (
    <form
      className="reviews__form form"
      method="post"
      action=""
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSubmit();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Ratings.map(({ value, title }) => {
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
            review.rating === Rating.Undefined ||
            review.comment.length < Review.MinLength ||
            review.comment.length >= Review.MaxLength ||
            isSendReview
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormReview;
