import { useState } from 'react';
import { Offer, Offers } from '../../types/types';
import OfferCard from '../offer-card/offer-card';

type ListOffersProps = {
  block: string;
  offers: Offers;
};

function ListOffers({ block, offers }: ListOffersProps): JSX.Element {
  const [, setActiveCardId] = useState<number | null>(null);

  return (
    <>
      { offers.map((offer: Offer) => (
        <article
          className={`${block}__card place-card`}
          onMouseEnter={() => setActiveCardId(offer.id)}
          onMouseLeave={() => setActiveCardId(null)}
          key={offer.id}
        >
          <OfferCard block={block} offer={offer} />
        </article>
      ))}
    </>
  );
}

export default ListOffers;
