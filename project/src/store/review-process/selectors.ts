import { NameSpace } from '../../const';
import { ReviewsType } from '../../types/offers';
import { State } from '../../types/state';

export const getCurrentOfferReviews = (state: State): ReviewsType => state[NameSpace.Comment].currentOfferReviews;
