import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { City } from './types/types';
import { mockCity } from './mocks/city';
import { mockOffers } from './mocks/offers';
import { mockReviews } from './mocks/reviews';

const Settings: {
  city: City;
  numberOffers: number;
} = {
  city: mockCity,
  numberOffers: 312,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      city={Settings.city}
      numberOffers={Settings.numberOffers}
      offers={mockOffers}
      reviews={mockReviews}
    />
  </React.StrictMode>,
);
