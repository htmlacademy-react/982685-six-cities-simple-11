import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, City, Offers, SortTypes } from './../types/types';

export const changeCityAction = createAction<City>('offers/changeCity');

export const setOffersAction = createAction<Offers>('offers/setOffers');

export const sortOffersAction = createAction(
  'offers/sortOffers',
  (sortOffers: SortTypes) => ({ payload: sortOffers })
);

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
