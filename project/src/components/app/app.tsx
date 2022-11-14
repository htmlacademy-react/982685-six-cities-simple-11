import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks';
import { loadOffersAction } from '../../store/actions';
import { AppRoute, ReviewsType } from '../../types/types';
import { mockOffers } from '../../mocks/offers';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

type AppProps = {
  reviews: ReviewsType;
};

function App({ reviews }: AppProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Loads offers once at startup
    dispatch(loadOffersAction(mockOffers));
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Main />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<Property reviews={reviews} />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
