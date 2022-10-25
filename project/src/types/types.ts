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
