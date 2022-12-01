import { name, date, internet, address, random, lorem } from 'faker';
import { City, Offer, Offers, ReviewType, ReviewsType } from '../types/offers';
import { UserData } from './../types/user';
import { HousingType, Rating, Review } from '../const';
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
  city: getRandomCity(),
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
  isPremium: random.boolean(),
  rating: random.number(Rating.MaxStars),
  type: HousingType.Room,
  bedrooms: random.number(4),
  maxAdults: random.number(4),
  price: random.number(2000),
  goods: [
    'Towels',
    'Breakfast',
    'Laptop friendly workspace',
    'Air conditioning',
    'Washer',
    'Baby seat',
  ],
  host: {
    id: random.number(100),
    name: name.firstName(),
    isPro: random.boolean(),
    avatarUrl: internet.url(),
  },
  description: lorem.lines(1),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 13,
  },
  id: random.number(100),
});

export const mockOffers = () => {
  const offers: Offers = [];

  for (let i = 0; i < 5; i++) {
    offers.push(mockOffer());
  }

  return offers;
};

export const mockReview = (): ReviewType => ({
  id: random.number(100),
  comment: lorem.word(Review.MaxLength),
  date: date.recent().toISOString(),
  rating: random.number(Rating.MaxStars),
  user: {
    id: random.number(100),
    name: name.firstName(),
    isPro: random.boolean(),
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
  id: random.number(100),
  email: internet.email(),
  token: internet.password(),
});
