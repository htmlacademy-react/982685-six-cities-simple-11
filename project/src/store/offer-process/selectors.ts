import { NameSpace } from '../../const';
import { Offer, Offers } from '../../types/offers';
import { State } from '../../types/state';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isDataLoading;
export const getCurrentOffer = (state: State): Offer | undefined => state[NameSpace.Data].currentOffer;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.Data].nearbyOffers;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
