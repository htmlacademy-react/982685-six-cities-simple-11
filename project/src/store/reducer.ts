import { createReducer } from '@reduxjs/toolkit';
import {
  changeCityAction,
  requireAuthorizationAction,
  setOffersAction,
  setDataLoadingStatusAction,
  setSortOptionOffersAction,
  setCurrentOfferAction,
  setCurrentOfferReviewsAction,
  setNearbyOffersAction,
} from './actions';
import {
  AuthorizationStatus,
  City,
  Offer,
  Offers,
  SortTypes,
  ReviewsType,
} from './../types/types';
import { INITIAL_CITY } from '../const';

type State = {
  city: City;
  offers: Offers;
  currentOffer: Offer | undefined;
  currentOfferReviews: ReviewsType;
  nearbyOffers: Offers;
  sortOptionOffers: SortTypes;
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
};

const initialState: State = {
  city: INITIAL_CITY,
  offers: [],
  currentOffer: undefined,
  currentOfferReviews: [],
  nearbyOffers: [],
  sortOptionOffers: SortTypes.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setCurrentOfferAction, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setCurrentOfferReviewsAction, (state, action) => {
      state.currentOfferReviews = action.payload;
    })
    .addCase(setNearbyOffersAction, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setSortOptionOffersAction, (state, action) => {
      state.sortOptionOffers = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadingStatusAction, (state, action) => {
      state.isDataLoading = action.payload;
    });
});

export { reducer };
