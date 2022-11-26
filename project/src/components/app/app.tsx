import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import Layout from '../layout/layout';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Spinner from '../spinner/spinner';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { AppRoute, AuthorizationStatus } from '../../const';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  if ((authorizationStatus === AuthorizationStatus.Unknown) || isDataLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={`${AppRoute.Offer}/:id`} element={<Property />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
