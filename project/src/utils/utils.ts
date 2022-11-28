import { Rating } from '../const';

/**
 * Calculates the width of block 'rating__star'
 * @param {number} rating - The rating from 1 to 5.
 * @returns {number} Width of block in percent.
 */
export const getWidthRating = (rating: number): number =>
  (100 * Math.round(rating) / Rating.MaxStars);

/**
 * Checks the e-mail for correctness
 * @param email - Checkable e-mail
 * @returns True, if the e-mail you are checking is correct
 */
export const isValidEmail = (email: string): boolean => {
  const re = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'i');
  return re.test(email);
};

/**
 * Checks the password for correctness
 * @param password - Checkable password
 * @returns True, if the password you are checking is correct
 */
export const isValidPassword = (password: string): boolean => {
  const re = new RegExp(/([0-9].*[a-z])|([a-z].*[0-9])/, 'i');
  return re.test(password);
};
