import { Rating } from '../const';
import { City, Offers } from '../types/offers';

/**
 * Calculates the width of block 'rating__star'
 * @param {number} rating - The rating from 1 to 5.
 * @returns {number} Width of block in percent.
 */
export const getWidthRating = (rating: number): number =>
  (100 * Math.round(rating) / Rating.MaxStars);

/**
 *
 * @param {Offers} offers - All offers
 * @param {City} city - The city to be searched
 * @returns {Offers} Filtred list of offers by city
 */
export const getOffersByCity = (offers: Offers, city: City): Offers =>
  offers.filter((offer) => offer.city.name === city.name);
