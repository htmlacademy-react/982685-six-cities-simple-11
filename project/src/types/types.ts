export type City = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type PlaceCardInfo = {
  id: number;
  mark: string;
  imageSrc: string;
  imageAlt: string;
  priceValue: number;
  priceText: string;
  ratingStars: number;
  name: string;
  type: string;
}
