import { ReviewsType } from './../../types/offers';
import { reviewProcess } from './review-process';
import { fetchOfferReviwsAction } from '../api-actions';
import { mockReviews } from './../../utils/mocks';

const reviews: ReviewsType = mockReviews();

describe('Reducer: review-process', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviewProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({ currentOfferReviews: [] });
  });

  it('should update reviews by load', () => {
    const state = { currentOfferReviews: [] };
    expect(reviewProcess.reducer(state, { type: fetchOfferReviwsAction.fulfilled.type, payload: reviews }))
      .toEqual({ currentOfferReviews: reviews });
  });
});
