// Names block for place cards
export const BlockPlaces = {
  Cities: 'cities',
  NearPlaces: 'near-places',
} as const;

// Rating (star)
export const Rating = {
  Undefined: 0,
  MinStars: 1,
  MaxStars: 5
} as const;

// Review
export const Review = {
  MinLength: 50,
  MaxLength: 300
} as const;

// Leaflet Map
export const Leaflet = {
  MapUrl: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  MarkerDefaultUrl: 'img/pin.svg',
  MarkerActiveUrl: 'img/pin-active.svg',
  HeightMap: {
    Main: 'calc(100vh - 186px)',
    Property: '579px'
  }
} as const;
