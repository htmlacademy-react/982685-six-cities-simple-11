import { PlaceCardInfo } from '../../types/types';
import PlaceCard from '../place-card/place-card';

type ListOffersProps = {
  places: PlaceCardInfo[];
};

function ListOffers({ places }: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((offer: PlaceCardInfo) => (
        <PlaceCard offer={offer} key={offer.id} />
      ))}
    </div>
  );
}

export default ListOffers;
