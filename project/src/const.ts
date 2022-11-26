import { Cities } from './types/offers';

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const CitiesList: Cities = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 13,
    },
    name: CityName.Paris,
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 13,
    },
    name: CityName.Cologne,
  },
  {
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 13,
    },
    name: CityName.Brussels,
  },
  {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 13,
    },
    name: CityName.Amsterdam,
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 13,
    },
    name: CityName.Hamburg,
  },
  {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 13,
    },
    name: CityName.Dusseldorf,
  },
];

export const InitialCity = CitiesList[0];

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer',
}

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HousingType {
  Apartment = 'Apartment',
  Room = 'Private Room',
  House = 'House',
  Hotel = 'Hotel',
}

export enum SortTypes {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

// Names block for offers cards
export const BlockPlaces = {
  Cities: 'cities',
  NearPlaces: 'near-places',
} as const;

// Rating (star)
export const Rating = {
  Undefined: 0,
  MinStars: 1,
  MaxStars: 5,
} as const;

export const Ratings: { value: number; title: string }[] = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 1,
    title: 'terribly',
  },
];

// Review
export const Review = {
  MinLength: 50,
  MaxLength: 300,
} as const;

// Leaflet Map
export const Leaflet = {
  MapUrl:
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  Marker: {
    DefaultUrl: 'img/pin.svg',
    ActiveUrl: 'img/pin-active.svg',
    IconWidth: 27,
    IconHegth: 39,
  },
} as const;
