import { useState } from 'react';
import { Offer, Offers } from '../../types/types';
import OfferCard from '../offer-card/offer-card';

type ListOffersProps = {
  offers: Offers;
};

function ListOffers({ offers }: ListOffersProps): JSX.Element {
  const [, setActiveCardId] = useState<number | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map((offer: Offer) => (
        <article
          className="cities__card place-card"
          onMouseEnter={() => setActiveCardId(offer.id)}
          onMouseLeave={() => setActiveCardId(null)}
          key={offer.id}
        >
          <OfferCard offer={offer} />
        </article>
      ))}
    </div>
  );
}

export default ListOffers;
