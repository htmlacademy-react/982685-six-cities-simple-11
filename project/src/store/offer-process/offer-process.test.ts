
import { fetchOffersAction, fetchCurrentOfferAction, fetchNearbyOffersAction } from './../api-actions';
import { mockOffer, mockOffers } from './../../utils/mocks';
import { OfferProcess } from '../../types/state';
import { offerProcess } from './offer-process';
import { Offer, Offers } from '../../types/offers';

describe('Reducer: offer-process', () => {
  let state: OfferProcess;
  const offers: Offers = mockOffers();
  const currentOffer: Offer = mockOffer();
  const nearbyOffers = mockOffers();

  beforeEach(() => {
    state = {
      offers: [],
      isOffersLoading: false,
      currentOffer: undefined,
      isCurrentOfferLoading: false,
      nearbyOffers: [],
      hasError: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offerProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should change data loading status to "True"', () => {
    expect(offerProcess.reducer(state, {type: fetchOffersAction.pending.type}))
      .toEqual({...state, isOffersLoading: true});
  });

  it('should update state by load offers', () => {
    state = {...state, isOffersLoading: true};
    expect(offerProcess.reducer(state, {type: fetchOffersAction.fulfilled.type, payload: offers}))
      .toEqual({...state, offers: offers, isOffersLoading: false, hasError: false});
  });

  it('should set hasError flag if server is unavailable', () => {
    expect(offerProcess.reducer(state, {type: fetchOffersAction.rejected.type, payload: offers}))
      .toEqual({...state, isOffersLoading: false, hasError: true});
  });

  it('should set current offer by load offer', () => {
    state = {...state, offers: offers};
    expect(offerProcess.reducer(state, {type: fetchCurrentOfferAction.fulfilled.type, payload: currentOffer}))
      .toEqual({...state, currentOffer});
  });

  it('should set near offers by load offers', () => {
    state = {...state, offers: offers, currentOffer: currentOffer};
    expect(offerProcess.reducer(state, {type: fetchNearbyOffersAction.fulfilled.type, payload: nearbyOffers}))
      .toEqual({...state, nearbyOffers});
  });

});
