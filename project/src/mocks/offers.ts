import { CityName, HousingType, Offers } from '../types/types';

export const mockOffers: Offers = [
  {
    id: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: CityName.Amsterdam,
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      id: 3,
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'img/1.png',
    },
    images: ['img/1.png'],
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    bedrooms: 3,
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: HousingType.Apartment,
  },

  {
    id: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: CityName.Amsterdam,
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    goods: [
      'Coffee machine',
      'Cable TV',
      'Breakfast',
      'Washing machine',
      'Towels',
      'Washer',
      'Dishwasher',
      'Baby seat',
      'Fridge',
      'Laptop friendly workspace',
      'Air conditioning'
    ],
    host: {
      id: 3,
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'img/1.png',
    },
    images: ['img/1.png'],
    isPremium: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    bedrooms: 2,
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 870,
    rating: 2.2,
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: HousingType.House
  },

  {
    id: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: CityName.Amsterdam,
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    goods: [
      'Washer',
      'Laptop friendly workspace',
      'Air conditioning',
      'Baby seat',
      'Breakfast'
    ],
    host: {
      id: 3,
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'img/1.png',
    },
    images: ['img/1.png'],
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10
    },
    bedrooms: 3,
    maxAdults: 7,
    previewImage: 'img/apartment-02.jpg',
    price: 360,
    rating: 3.5,
    title: 'The house among olive',
    type: HousingType.House,
  },

  {
    id: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: CityName.Amsterdam,
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    goods: [
      'Laptop friendly workspace',
      'Washer',
      'Breakfast'
    ],
    host: {
      id: 3,
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'img/1.png',
    },
    images: ['img/1.png'],
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10,
    },
    bedrooms: 3,
    maxAdults: 6,
    previewImage: 'img/apartment-03.jpg',
    price: 426,
    rating: 4.4,
    title: 'Tile House',
    type: HousingType.House,
  },
];
