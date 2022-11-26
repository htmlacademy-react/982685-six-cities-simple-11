import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, City, Offers, SortTypes, ReviewsType, Offer } from './../types/types';

export const changeCityAction = createAction<City>('data/changeCity');

export const setOffersAction = createAction<Offers>('data/setOffers');

export const setSelectedOfferIdAction = createAction<number | undefined>('data/setSelectedOfferId');

export const setCurrentOfferAction = createAction<Offer | undefined>('data/setOfferById');

export const setCurrentOfferReviewsAction = createAction<ReviewsType>('data/setReviews');

export const setNearbyOffersAction = createAction<Offers>('data/setNearbyOffers');

export const setSortOptionOffersAction = createAction<SortTypes>('data/setSortOptionOffers');

export const setDataLoadingStatusAction = createAction<boolean>('data/setDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');

export const requireAuthorizationAction = createAction<AuthorizationStatus>('user/requireAuthorization');
