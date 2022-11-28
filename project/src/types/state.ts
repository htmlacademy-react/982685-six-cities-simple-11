import { store } from '../store';
import { City, Offer, Offers, ReviewsType } from '../types/offers';
import { AuthorizationStatus, SortType } from '../const';
import { UserData } from './user';

export type AppProcess = {
  city: City;
  sortOptionOffers: SortType;
  selectedOfferId: number | undefined;
}

export type OfferProcess = {
  offers: Offers;
  isOffersLoading: boolean;
  hasError: boolean;
  currentOffer: Offer | undefined;
  isCurrentOfferLoading: boolean;
  nearbyOffers: Offers;
}

export type ReviewProcess = {
  currentOfferReviews: ReviewsType;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | undefined;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
