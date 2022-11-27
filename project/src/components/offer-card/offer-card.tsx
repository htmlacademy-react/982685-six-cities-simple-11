import { memo, MouseEventHandler, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offers';
import { getWidthRating } from '../../utils/utils';

type OfferCardProps = {
  block: string;
  offer: Offer;
  onOfferCardHover?: (id: number | undefined) => void;
};

function OfferCard({ block, offer, onOfferCardHover }: OfferCardProps): JSX.Element {
  const { id, isPremium, previewImage, price, rating, title, type } = offer;

  const handleMouseEnter: MouseEventHandler<HTMLElement> = useCallback((): void => onOfferCardHover?.(id), [id, onOfferCardHover]);
  const handleMouseLeave: MouseEventHandler<HTMLElement> = useCallback((): void => onOfferCardHover?.(undefined), [onOfferCardHover]);

  return (
    <article
      className={`${block}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} alt={title} width="260" height="200" />
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
            <span style={{ width: `${getWidthRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default memo(OfferCard);
