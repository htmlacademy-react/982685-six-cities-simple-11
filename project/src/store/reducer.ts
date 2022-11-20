import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, requireAuthorizationAction, setOffersAction, setDataLoadingStatusAction, setSortOptionOffersAction } from './actions';
import { AuthorizationStatus, City, Offers, SortTypes } from './../types/types';
import { INITIAL_CITY } from '../const';

type State = {
  city: City;
  offers: Offers;
  sortOptionOffers: SortTypes;
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
}

const initialState: State = {
  city: INITIAL_CITY,
  offers: [],
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
