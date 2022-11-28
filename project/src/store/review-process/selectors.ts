import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewsType } from '../../types/offers';
import { State } from '../../types/state';
import sortReviews from '../../utils/sort-reviews';

export const getCurrentOfferReviews = (state: State): ReviewsType =>
  state[NameSpace.Review].currentOfferReviews;

export const getSortedReviews = createSelector(
  getCurrentOfferReviews,
  (reviews) => sortReviews(reviews)
);
