/*
 * Enumerations
 */

export const enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer',
}

export const enum HousingType {
  Apartment = 'Apartment',
  Room = 'Private Room',
  House = 'House',
  Hotel = 'Hotel',
}

/*
 * Types
 */
export type Cites = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Locations = Location[];

export type City = {
  name: Cites;
  location: Location;
};

export type User = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
  email: string;
  token: string;
};

export type Hoster = Omit<User, 'email' | 'token'>;

export type UserAuthentication = {
  email: string;
  password: string;
};

export type Offer = {
  id: number;
  city: City;
  location: Location;
  host: Hoster;
  bedrooms: number;
  goods: string[];
  images: string[];
  isPremium: boolean;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  description: string;
};

export type Offers = Offer[];

export type Review = {
  id: number;
  date: string;
  rating: number;
  comment: string;
  user: Hoster;
};

export type Reviews = Review[];

export type NewReview = Pick<Review, 'rating' | 'comment'>;
