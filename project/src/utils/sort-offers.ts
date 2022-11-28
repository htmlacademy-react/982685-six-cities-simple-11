import { Offer, Offers } from './../types/offers';
import { SortType } from '../const';

const sortPriceLowToHigh = (offer1: Offer, offer2: Offer): number =>
  Math.sign(offer1.price - offer2.price);

const sortPriceHighToLow = (offer1: Offer, offer2: Offer): number =>
  Math.sign(offer2.price - offer1.price);

const sortTopRatingFirst = (offer1: Offer, offer2: Offer): number =>
  Math.sign(offer2.rating - offer1.rating);

const sortOffers = (offers: Offers, type: SortType): Offers => {
  const sortedOffers = [...offers]; // Copy objects for mutatition

  switch (type) {
    case SortType.PriceToHigh:
      return sortedOffers.sort(sortPriceLowToHigh);
    case SortType.PriceToLow:
      return sortedOffers.sort(sortPriceHighToLow);
    case SortType.TopRated:
      return sortedOffers.sort(sortTopRatingFirst);
    case SortType.Popular:
    default:
      return offers;
  }
};

export default sortOffers;
