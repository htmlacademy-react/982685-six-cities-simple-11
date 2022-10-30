import { PlaceCardInfo } from '../../types/types';
import PlaceCard from '../place-card/place-card';

type ListOffersProps = {
  places: PlaceCardInfo[];
};

function ListOffers ({ places }: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map(({ id, isPremium, imageSrc, imageAlt, price, rating, name, type }: PlaceCardInfo) => (
        <PlaceCard
          key={id}
          isPremium={isPremium}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          price={price}
          rating={rating}
          name={name}
          type={type}
        />
      ))}
    </div>
  );
}

export default ListOffers;
