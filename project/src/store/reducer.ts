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
  setSelectedOfferIdAction,
} from './actions';
import {
  City,
  Offer,
  Offers,
  ReviewsType,
} from './../types/offers';
import { AuthorizationStatus, InitialCity, SortTypes } from '../const';

type State = {
  city: City;
  offers: Offers;
  selectedOfferId: number | undefined;
  currentOffer: Offer | undefined;
  currentOfferReviews: ReviewsType;
  nearbyOffers: Offers;
  sortOptionOffers: SortTypes;
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
};

const initialState: State = {
  city: InitialCity,
  offers: [],
  selectedOfferId: undefined,
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
    .addCase(setSelectedOfferIdAction, (state, action) => {
      state.selectedOfferId = action.payload;
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
