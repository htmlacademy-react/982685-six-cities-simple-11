import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { City, PlaceCardInfo } from './types/types';

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
    mark: 'Premium',
    imageSrc: 'img/apartment-01.jpg',
    imageAlt: 'Place image',
    priceValue: 120,
    priceText: 'night',
    ratingStars: 4,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: 2,
    mark: '',
    imageSrc: 'img/room.jpg',
    imageAlt: 'Place image',
    priceValue: 80,
    priceText: 'night',
    ratingStars: 4,
    name: 'Wood and stone place',
    type: 'Private room',
  },
  {
    id: 3,
    mark: '',
    imageSrc: 'img/apartment-02.jpg',
    imageAlt: 'Place image',
    priceValue: 132,
    priceText: 'night',
    ratingStars: 4,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    id: 4,
    mark: 'Premium',
    imageSrc: 'img/apartment-03.jpg',
    imageAlt: 'Place image',
    priceValue: 180,
    priceText: 'night',
    ratingStars: 5,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  {
    id: 5,
    mark: '',
    imageSrc: 'img/room.jpg',
    imageAlt: 'Place image',
    priceValue: 80,
    priceText: 'night',
    ratingStars: 3.5,
    name: 'Wood and stone place',
    type: 'Private room',
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
