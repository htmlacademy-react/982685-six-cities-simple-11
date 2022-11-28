import { CityName, HousingType } from '../const';

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

export type Hoster = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
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
  type: HousingType;
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
