import { NameSpace, SortTypes } from '../../const';
import { City } from '../../types/offers';
import { State } from '../../types/state';

export const getCity = (state: State): City => state[NameSpace.Offer].city;
export const getSortOptionOffers = (state: State): SortTypes => state[NameSpace.Offer].sortOptionOffers;
export const getsetSelectedOfferId = (state: State): number | undefined => state[NameSpace.Offer].selectedOfferId;
