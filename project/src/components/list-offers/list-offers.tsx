import { useState } from 'react';
import { OfferCardInfo } from '../../types/types';
import OfferCard from '../offer-card/offer-card';

type ListOffersProps = {
  offers: OfferCardInfo[];
};

function ListOffers({ offers }: ListOffersProps): JSX.Element {
  const [, setActiveCardId] = useState<number | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map((offer: OfferCardInfo) => (
        <article
          className="cities__card place-card"
          key={offer.id}
          onMouseEnter={() => setActiveCardId(offer.id)}
          onMouseLeave={() => setActiveCardId(null)}
        >
          <OfferCard offer={offer} />
        </article>
      ))}
    </div>
  );
}

export default ListOffers;
