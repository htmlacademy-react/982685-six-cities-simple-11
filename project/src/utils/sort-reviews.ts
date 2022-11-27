import { ReviewType, ReviewsType } from './../types/offers';

const sortDateDecriment = (a: ReviewType, b: ReviewType): number => {
  const reviewDate1 = +new Date(a.date);
  const reviewDate2 = +new Date(b.date);

  return Math.sign(reviewDate2 - reviewDate1);
};

const sortReviews = (reviews: ReviewsType): ReviewsType => {
  const sortedReviews = [...reviews]; // Copy objects for mutatition

  return sortedReviews.sort(sortDateDecriment);
};

export default sortReviews;
