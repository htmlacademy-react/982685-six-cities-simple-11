import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, loadOffersAction } from './actions';
import { City, Offers } from './../types/types';
import { INITIAL_CITY } from '../const';

type State = {
  city: City;
  offers: Offers;
}

const initialState: State = {
  city: INITIAL_CITY,
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
