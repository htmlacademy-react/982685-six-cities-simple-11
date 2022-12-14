import { ChangeEvent, FormEvent, Fragment, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { NewReview } from '../../types/offers';
import { Rating, RatingsList, Review } from '../../const';
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

  const handleRatingChange = useCallback((evt: ChangeEvent<HTMLInputElement>): void => (
    setReview({ ...review, rating: +evt.target.value })
  ), [review]);

  const handleReviewChange = useCallback((evt: ChangeEvent<HTMLTextAreaElement>): void => (
    setReview({ ...review, comment: evt.target.value })
  ), [review]);

  const dispatch = useAppDispatch();

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    setSendReview(true);
    dispatch(fetchSendReviewAction({ id: hotelId, comment: review.comment, rating: review.rating }))
      .then(() => {
        setReview({ comment: '', rating: Rating.Undefined });
      })
      .catch(() => {
        toast.error('Error in submitting a review');
      })
      .finally(() => {
        setSendReview(false);
      });
  }, [hotelId, review, dispatch]);

  return (
    <form
      className="reviews__form form"
      method="post"
      action=""
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RatingsList.map(({ value, title }) => {
            const id = `${value}-stars`;
            return (
              <Fragment key={id}>
                <input
                  className="form__rating-input visually-hidden"
                  type="radio"
                  name="rating"
                  id={id}
                  value={value}
                  onChange={handleRatingChange}
                  checked={review.rating === value}
                />
                <label
                  className="reviews__rating-label form__rating-label"
                  htmlFor={id}
                  title={title}
                >
                  <svg className="form__star-image" width="37" height="33" data-testid="star-rating">
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
        onChange={handleReviewChange}
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
