import { ReviewsType } from '../types/types';

export const mockReviews: ReviewsType = [
  {
    id: 1,
    user: {
      id: 12,
      isPro: true,
      name: 'Isaac',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/3.jpg'
    },
    rating: 4,
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2022-10-16T13:58:46.495Z'
  },
  {
    id: 2,
    user: {
      id: 17,
      isPro: false,
      name: 'Emely',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/8.jpg'
    },
    rating: 3,
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly recommend :)',
    date: '2022-10-10T13:58:46.499Z'
  }
];
