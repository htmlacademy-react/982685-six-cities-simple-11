import { NameSpace, SortType } from '../../const';
import { City } from '../../types/offers';
import { State } from '../../types/state';

export const getCity = (state: State): City => state[NameSpace.App].city;
export const getSortOptionOffers = (state: State): SortType => state[NameSpace.App].sortOptionOffers;
export const getsetSelectedOfferId = (state: State): number | undefined => state[NameSpace.App].selectedOfferId;
