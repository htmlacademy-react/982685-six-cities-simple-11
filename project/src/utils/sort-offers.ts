import { Offer, Offers, SortTypes } from './../types/types';

const sortPriceLowToHigh = (offer1: Offer, offer2: Offer): number =>
  Math.sign(offer1.price - offer2.price);

const sortPriceHighToLow = (offer1: Offer, offer2: Offer): number =>
  Math.sign(offer2.price - offer1.price);

const sortTopRatingFirst = (offer1: Offer, offer2: Offer): number =>
  Math.sign(offer2.rating - offer1.rating);

const sortOffers = (offers: Offers, type: SortTypes): Offers => {
  const sortedOffers = [...offers]; // Copy objects for mutatition

  switch (type) {
    case SortTypes.PriceToHigh:
      return sortedOffers.sort(sortPriceLowToHigh);
    case SortTypes.PriceToLow:
      return sortedOffers.sort(sortPriceHighToLow);
    case SortTypes.TopRated:
      return sortedOffers.sort(sortTopRatingFirst);
    case SortTypes.Popular:
    default:
      return offers;
  }
};

export default sortOffers;
