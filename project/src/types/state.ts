import { store } from '../store';
import { City, Offer, Offers, ReviewsType } from '../types/offers';
import { AuthorizationStatus, SortTypes } from '../const';
import { UserData } from './user';

export type OfferProcess = {
  city: City;
  sortOptionOffers: SortTypes;
  selectedOfferId: number | undefined;
}

export type OfferData = {
  offers: Offers;
  currentOffer: Offer | undefined;
  nearbyOffers: Offers;
  isDataLoading: boolean;
  hasError: boolean;
}

export type CommentProcess = {
  currentOfferReviews: ReviewsType;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | undefined;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
