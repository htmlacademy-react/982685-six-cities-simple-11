import { name, date, internet, address, lorem, datatype } from 'faker';
import { City, Offer, Offers, ReviewType, ReviewsType } from '../types/offers';
import { UserData } from './../types/user';
import { InitialCity, HousingType, Rating, Review } from '../const';
import { getRandomCity } from './utils';

export const mockCity = (): City => ({
  name: getRandomCity().name,
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 13,
  },
});

export const mockOffer = (): Offer => ({
  city: InitialCity,
  previewImage: internet.url(),
  images: [
    internet.url(),
    internet.url(),
    internet.url(),
    internet.url(),
    internet.url(),
    internet.url(),
  ],
  title: lorem.lines(1),
  isPremium: datatype.boolean(),
  rating: datatype.number(Rating.MaxStars),
  type: HousingType.Room,
  bedrooms: datatype.number(4),
  maxAdults: datatype.number(4),
  price: datatype.number(2000),
  goods: [
    'Towels',
    'Breakfast',
    'Laptop friendly workspace',
    'Air conditioning',
    'Washer',
    'Baby seat',
  ],
  host: {
    id: datatype.number(10),
    name: name.firstName(),
    isPro: datatype.boolean(),
    avatarUrl: internet.url(),
  },
  description: lorem.lines(1),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 13,
  },
  id: datatype.number(100),
});

export const mockOffers = () => {
  const offers: Offers = [];

  for (let i = 0; i < 3; i++) {
    offers.push(mockOffer());
  }

  return offers;
};

export const mockReview = (): ReviewType => ({
  id: datatype.number(100),
  comment: lorem.word(Review.MaxLength),
  date: date.recent().toISOString(),
  rating: datatype.number(Rating.MaxStars),
  user: {
    id: datatype.number(100),
    name: name.firstName(),
    isPro: datatype.boolean(),
    avatarUrl: internet.url(),
  }
});

export const mockReviews = (): ReviewsType => {
  const reviews: ReviewsType = [];

  for (let i = 0; i < 3; i++) {
    reviews.push(mockReview());
  }

  return reviews;
};

export const mockUser = (): UserData => ({
  id: datatype.number(100),
  email: internet.email(),
  token: internet.password(),
});
