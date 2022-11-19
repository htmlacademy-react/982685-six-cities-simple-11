import { Cities, CityName} from './types/types';

// City names
export const cities: Cities = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10,
    },
    name: CityName.Paris,
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10,
    },
    name: CityName.Cologne,
  },
  {
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 10,
    },
    name: CityName.Brussels,
  },
  {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: CityName.Amsterdam,
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10,
    },
    name: CityName.Hamburg,
  },
  {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10,
    },
    name: CityName.Dusseldorf,
  },
];

export const INITIAL_CITY = cities[0];

// Names block for place cards
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

// Review
export const Review = {
  MinLength: 50,
  MaxLength: 300,
} as const;

// Leaflet Map
export const Leaflet = {
  MapUrl: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  Marker: {
    DefaultUrl: 'img/pin.svg',
    ActiveUrl: 'img/pin-active.svg',
    IconWidth: 27,
    IconHegth: 39,
  },
  HeightMap: {
    Main: 'calc(100vh - 186px)',
    Property: '579px',
  },
} as const;
