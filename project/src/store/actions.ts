import { createAction } from '@reduxjs/toolkit';
import { City, Offers } from './../types/types';

export const changeCityAction = createAction(
  'offers/changeCity',
  (city: City) => ({
    payload: city,
  })
);

export const setOffersAction = createAction(
  'offers/setOffers',
  (offers: Offers) => ({
    payload: offers,
  })
);
