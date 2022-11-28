import { getSortOptionOffers } from './../app-process/selectors';
import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offer, Offers } from '../../types/offers';
import { State } from '../../types/state';
import { getCity } from '../app-process/selectors';
import sortOffers from '../../utils/sort-offers';

export const getOffers = (state: State ): Offers =>
  state[NameSpace.Offer].offers;

export const getCurrentOffer = (state: State): Offer | undefined =>
  state[NameSpace.Offer].currentOffer;

export const getNearbyOffers = (state: State): Offers =>
  state[NameSpace.Offer].nearbyOffers;

export const getOffersLoadingStatus = (state: State): boolean =>
  state[NameSpace.Offer].isOffersLoading;

export const getCurrentOfferLoadingStatus = (state: State): boolean =>
  state[NameSpace.Offer].isCurrentOfferLoading;

export const getErrorStatus = (state: State): boolean =>
  state[NameSpace.Offer].hasError;

export const getOffersByCity = createSelector(
  getOffers,
  getCity,
  (offers, city) => offers.filter((offer) => offer.city.name === city.name)
);

export const getSortedOffers = createSelector(
  getOffersByCity,
  getSortOptionOffers,
  (offers, sortType) => sortOffers(offers, sortType)
);
