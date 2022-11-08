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
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2022-08-16T13:58:46.495Z'
  },
  {
    id: 2,
    user: {
      id: 17,
      isPro: false,
      name: 'Emely',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/8.jpg'
    },
    rating: 5,
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly recommend :)',
    date: '2022-09-10T13:58:46.499Z'
  },
  {
    id: 3,
    user: {
      id: 18,
      isPro: true,
      name: 'Sophie',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/9.jpg'
    },
    rating: 4,
    comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2022-10-06T13:58:46.499Z'
  }
];
