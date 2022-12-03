import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getAuthCheckedStatus } from '../../store/user-process/selectors';
import { getErrorStatus, getOffersLoadingStatus } from '../../store/offer-process/selectors';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import Spinner from '../spinner/spinner';
import LoadError from '../load-error/load-error';

function App(): JSX.Element {
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isOffersLoading = useAppSelector(getOffersLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);

  if (!isAuthChecked || isOffersLoading) {
    return (
      <Spinner />
    );
  }

  if (hasError) {
    return (
      <LoadError />);
  }

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={`${AppRoute.Offer}/${AppRoute.Room}`} element={<Property />} />
        </Route>
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
