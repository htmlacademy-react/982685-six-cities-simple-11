import { Rating } from '../const';

/**
 * Calculates the width of block 'rating__star'
 * @param {number} rating - The rating from 1 to 5.
 * @returns {number} Width of block in percent.
 */
export const getWidthRating = (rating: number): number => Math.round((100 / Rating.MaxStars) * rating);
