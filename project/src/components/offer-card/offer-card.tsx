import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlaceCardInfo } from '../../types/types';

type PlaceCardProps ={
  offer: PlaceCardInfo;
};

function PlaceCard({ offer }: PlaceCardProps): JSX.Element {
  const { id, isPremium, imageSrc, imageAlt, price, rating, name, type } = offer;
  const [activeCardId, setActiveCardId] = useState(0);

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => setActiveCardId(id)}
      onMouseLeave={() => setActiveCardId(0)}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${activeCardId}`}>
          <img className="place-card__image" src={imageSrc} alt={imageAlt} width="260" height="200" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(20 * rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${activeCardId}`}>{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
