import { createAction } from '@reduxjs/toolkit';
import { City, Offers, SortTypes } from './../types/types';

export const changeCityAction = createAction(
  'offers/changeCity',
  (city: City) => ({
    payload: city,
  })
);

export const loadOffersAction = createAction(
  'offers/loadOffers',
  (offers: Offers) => ({
    payload: offers,
  })
);

export const sortOffersAction = createAction(
  'offers/sortOffers',
  (sortOffers: SortTypes) => ({
    payload: sortOffers,
  })
);

// export const sortOffersAction = createAction<{sortType: SortTypes}>('offers/sortOffers');
