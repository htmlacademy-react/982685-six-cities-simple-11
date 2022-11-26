import { useEffect, useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import { store } from '../../store';
import { setSelectedOfferIdAction } from '../../store/actions';
import { Offer, Offers } from '../../types/offers';
import { BlockPlaces } from '../../const';

type ListOffersProps = {
  block: string;
  offers: Offers;
};

function ListOffers({ block, offers }: ListOffersProps): JSX.Element {
  const [selectedOfferId, setSelectedOfferId] = useState<number | undefined>(undefined);
  const onCardHover = (id: number | undefined): void => setSelectedOfferId(id);

  useEffect(() => {
    store.dispatch(setSelectedOfferIdAction(selectedOfferId));

    return () => {
      store.dispatch(setSelectedOfferIdAction(undefined));
    };
  }, [selectedOfferId]);

  const classList = (block === BlockPlaces.Cities) ?
    'cities__places-list places__list tabs__content' :
    'near-places__list places__list';

  return (
    <div className={classList}>
      {offers.map((offer: Offer) => (
        <OfferCard
          key={offer.id}
          block={block}
          offer={offer}
          onOfferCardHover={onCardHover}
        />
      ))}
    </div>
  );
}

export default ListOffers;
