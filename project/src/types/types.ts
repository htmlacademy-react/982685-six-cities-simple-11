export type City = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export const RATING_MAX = 5;

export const enum HousingType {
  Apartment = 'Apartment',
  Room = 'Private Room',
  House = 'House',
  Hotel = 'Hotel',
}

export type OfferCardInfo = {
  id: number;
  isPremium: boolean;
  imageSrc: string;
  imageAlt: string;
  price: number;
  rating: number;
  name: string;
  type: HousingType;
}

export const enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer',
}

export type User = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

export type Review = {
  id: number;
  comment: string;
  date: string;
  rating: number;
  user: User;
};

export type NewReview = Pick<Review, 'comment' | 'rating'>;
