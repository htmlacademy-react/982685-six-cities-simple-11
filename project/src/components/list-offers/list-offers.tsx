import { memo, useCallback, useEffect, useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import { Offer, Offers } from '../../types/offers';
import { BlockPlaces } from '../../const';
import { store } from '../../store';
import { setSelectedOfferId } from '../../store/app-process/app-process';

type ListOffersProps = {
  block: string;
  offers: Offers;
};

function ListOffers({ block, offers }: ListOffersProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<number | undefined>(undefined);
  const onCardHover = useCallback((id: number | undefined): void => setSelectedOffer(id), []);

  useEffect(() => {
    store.dispatch(setSelectedOfferId(selectedOffer));

    return () => {
      store.dispatch(setSelectedOfferId(undefined));
    };
  }, [selectedOffer]);

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

export default memo(ListOffers);
