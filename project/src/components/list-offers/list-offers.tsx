import OfferCard from '../offer-card/offer-card';
import { Offer, Offers } from '../../types/types';

type ListOffersProps = {
  block: string;
  offers: Offers;
  handleMouseEnterOffer: (offerId: number) => void;
  handleMouseLeaveOffer: () => void;
};

function ListOffers({ block, offers, handleMouseEnterOffer, handleMouseLeaveOffer }: ListOffersProps): JSX.Element {
  return (
    <>
      { offers.map((offer: Offer) => (
        <article
          className={`${block}__card place-card`}
          onMouseEnter={() => handleMouseEnterOffer(offer.id)}
          onMouseLeave={() => handleMouseLeaveOffer()}
          key={offer.id}
        >
          <OfferCard
            block={block}
            offer={offer}
          />
        </article>
      ))}
    </>
  );
}

export default ListOffers;
