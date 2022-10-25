import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { City, PlaceCardInfo } from '../../types/types';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';

type AppProps = {
  city: City;
  rentalOffers: number;
  places: PlaceCardInfo[];
};

function App({ city, rentalOffers, places }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Main
              city={city}
              rentalOffers={rentalOffers}
              places={places}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<Property />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
