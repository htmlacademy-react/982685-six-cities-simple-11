import { HousingType, PlaceCardInfo } from '../types/types';

export const mockPlaceCard: PlaceCardInfo[] = [
  {
    id: 1,
    isPremium: true,
    imageSrc: 'img/apartment-01.jpg',
    imageAlt: 'Place image',
    price: 120,
    rating: 4,
    name: 'Beautiful & luxurious apartment at great location',
    type: HousingType.Apartment,
  },
  {
    id: 2,
    isPremium: false,
    imageSrc: 'img/room.jpg',
    imageAlt: 'Place image',
    price: 80,
    rating: 4,
    name: 'Wood and stone place',
    type: HousingType.Room,
  },
  {
    id: 3,
    isPremium: false,
    imageSrc: 'img/apartment-02.jpg',
    imageAlt: 'Place image',
    price: 132,
    rating: 4,
    name: 'Canal View Prinsengracht',
    type: HousingType.Apartment,
  },
  {
    id: 4,
    isPremium: true,
    imageSrc: 'img/apartment-03.jpg',
    imageAlt: 'Place image',
    price: 180,
    rating: 5,
    name: 'Nice, cozy, warm big bed apartment',
    type: HousingType.Apartment,
  },
  {
    id: 5,
    isPremium: false,
    imageSrc: 'img/room.jpg',
    imageAlt: 'Place image',
    price: 80,
    rating: 4,
    name: 'Wood and stone place',
    type: HousingType.Room,
  }
];
