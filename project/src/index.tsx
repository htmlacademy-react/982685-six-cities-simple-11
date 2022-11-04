import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { City } from './types/types';
import { mockOffersCard } from './mocks/offers';
import { CITY } from './mocks/city';

const Settings: {
  city: City;
  rentalOffers: number;
} = {
  city: CITY,
  rentalOffers: 312,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      city={Settings.city}
      rentalOffers={Settings.rentalOffers}
      offers={mockOffersCard}
    />
  </React.StrictMode>,
);
