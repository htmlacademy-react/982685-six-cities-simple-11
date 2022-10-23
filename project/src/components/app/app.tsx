import Main from '../../pages/main/main';
import { City, PlaceCardInfo } from '../../types/types';

type AppProps = {
  city: City;
  rentalOffers: number;
  places: PlaceCardInfo[];
};

function App({ city, rentalOffers, places }: AppProps): JSX.Element {
  return (
    <Main
      city={city}
      rentalOffers={rentalOffers}
      places={places}
    />
  );
}

export default App;
