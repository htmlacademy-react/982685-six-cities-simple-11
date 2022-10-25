import { PlaceCardInfo } from '../../types/types';

type PlaceCardProps = Omit<PlaceCardInfo, 'id'>;

function PlaceCard({ mark, imageSrc, imageAlt, priceValue, priceText, ratingStars, name, type }: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      {mark &&
      <div className="place-card__mark">
        <span>{mark}</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#dummy">
          <img className="place-card__image" src={imageSrc} alt={imageAlt} width="260" height="200" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{priceValue}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;{priceText}</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(20 * ratingStars)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#dummy">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
