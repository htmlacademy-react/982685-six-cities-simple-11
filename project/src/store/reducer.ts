import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, loadOffersAction, sortOffersAction } from './actions';
import { City, Offers, SortTypes } from './../types/types';
import { INITIAL_CITY } from '../const';

type State = {
  city: City;
  offers: Offers;
  sortOffers: SortTypes;
}

const initialState: State = {
  city: INITIAL_CITY,
  offers: [],
  sortOffers: SortTypes.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortOffersAction, (state, action) => {
      state.sortOffers = action.payload;
    });
});

export { reducer };
