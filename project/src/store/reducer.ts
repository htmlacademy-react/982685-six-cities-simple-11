import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, setOffersAction } from './actions';
import { mockOffers } from './../mocks/offers';
import { INITIAL_CITY } from '../const';

const initialState = {
  city: INITIAL_CITY,
  offers: mockOffers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersAction, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
