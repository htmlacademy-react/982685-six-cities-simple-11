import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, requireAuthorization, setOffersAction, sortOffersAction } from './actions';
import { AuthorizationStatus, City, Offers, SortTypes } from './../types/types';
import { INITIAL_CITY } from '../const';

type State = {
  city: City;
  offers: Offers;
  sortOffers: SortTypes;
  authorizationStatus: AuthorizationStatus;
}

const initialState: State = {
  city: INITIAL_CITY,
  offers: [],
  sortOffers: SortTypes.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortOffersAction, (state, action) => {
      state.sortOffers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
