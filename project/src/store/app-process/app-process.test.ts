import { appProcess, changeCity, setSelectedOfferId, setSortOptionOffers } from './app-process';
import { City } from './../../types/offers';
import { InitialCity, SortType } from './../../const';
import { mockCity } from './../../utils/mocks';
import { AppProcess } from '../../types/state';

describe('Reducer: app-process', () => {
  let state: AppProcess;

  beforeEach(() => {
    state = {
      city: InitialCity,
      sortOptionOffers: SortType.Popular,
      selectedOfferId: undefined,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(appProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual({
      city: InitialCity,
      sortOptionOffers: SortType.Popular,
      selectedOfferId: undefined,
    });
  });

  it('should change current city', () => {
    const newCity: City = mockCity();

    expect(appProcess.reducer(state, changeCity(newCity))).toEqual({
      city: newCity,
      sortOptionOffers: SortType.Popular,
      selectedOfferId: undefined,
    });
  });

  it('should change type of sorting', () => {
    const sortOptionOffers = SortType.TopRated;

    expect(appProcess.reducer(state, setSortOptionOffers({ sortOptionOffers }))).toEqual({
      city: InitialCity,
      sortOptionOffers: SortType.TopRated,
      selectedOfferId: undefined,
    });
  });

  it('should change selected OfferId on 10', () => {
    const offerId = 10;

    expect(appProcess.reducer(state, setSelectedOfferId(offerId))).toEqual({
      city: InitialCity,
      sortOptionOffers: SortType.Popular,
      selectedOfferId: offerId,
    });
  });

  it('should change selected OfferId on undefined', () => {
    const offerId = 10;
    state = {...state, selectedOfferId: offerId };

    expect(appProcess.reducer(state, setSelectedOfferId(undefined))).toEqual({
      city: InitialCity,
      sortOptionOffers: SortType.Popular,
      selectedOfferId: undefined,
    });
  });
});
