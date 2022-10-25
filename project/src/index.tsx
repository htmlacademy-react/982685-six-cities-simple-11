import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { City, HousingType, PlaceCardInfo } from './types/types';

const Settings: {
  city: City;
  rentalOffers: number;
} = {
  city: 'Paris',
  rentalOffers: 312,
};

const mockPlaceCard: PlaceCardInfo[] = [
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      city={Settings.city}
      rentalOffers={Settings.rentalOffers}
      places={mockPlaceCard}
    />
  </React.StrictMode>,
);
