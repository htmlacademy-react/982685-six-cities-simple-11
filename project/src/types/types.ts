export type City = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export const enum HousingType {
  Apartment = 'Apartment',
  Room = 'Private Room',
  House = 'House',
  Hotel = 'Hotel',
}

export type PlaceCardInfo = {
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
  Room = '/offer/:id',
}

export type User = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

export type Comment = {
  id: number;
  comment: string;
  date: string;
  rating: number;
  user: User;
};

export type NewComment = Pick<Comment, 'comment' | 'rating'>;
