/*
 * Enumerations
 */

export const enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer',
}

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments/',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const enum HousingType {
  Apartment = 'Apartment',
  Room = 'Private Room',
  House = 'House',
  Hotel = 'Hotel',
}

export const enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum SortTypes {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  TopRated = 'Top rated first'
}

/*
 * Types
 */
export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Locations = Location[];

export type City = {
  location: Location;
  name: CityName;
};

export type Cities = City[];

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

export type ReviewType = {
  id: number;
  date: string;
  rating: number;
  comment: string;
  user: Hoster;
};

export type ReviewsType = ReviewType[];

export type NewReview = Pick<ReviewType, 'rating' | 'comment'>;
