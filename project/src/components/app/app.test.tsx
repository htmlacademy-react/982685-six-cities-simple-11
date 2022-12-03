import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import { AuthorizationStatus, AppRoute, NameSpace, CityName, SortType, InitialCity } from '../../const';
import { mockReviews, mockOffers } from '../../utils/mocks';
import App from './app';

const city = InitialCity;
const offers = mockOffers();
const nearbyOffers = mockOffers();
const reviews = mockReviews();

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.App]: {
    city: city,
    sortOptionOffers: SortType.Popular,
    selectedOfferId: undefined,
  },
  [NameSpace.Offer]: {
    offers: offers,
    nearbyOffers: nearbyOffers,
    isOffersLoading: false,
    currentOffer: offers[0],
    isCurrentOfferLoading: false,
    hasError: false,
  },
  [NameSpace.Review]: {
    currentOfferReviews: reviews,
  },
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    user: undefined,
  },
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {

  it('should render Main page, when user navigate to root', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(CityName.Paris)).toBeInTheDocument();
    expect(screen.getByText(CityName.Cologne)).toBeInTheDocument();
    expect(screen.getByText(CityName.Brussels)).toBeInTheDocument();
    expect(screen.getByText(CityName.Amsterdam)).toBeInTheDocument();
    expect(screen.getByText(CityName.Hamburg)).toBeInTheDocument();
    expect(screen.getByText(CityName.Dusseldorf)).toBeInTheDocument();
    expect(screen.getByText(CityName.Dusseldorf)).toBeInTheDocument();

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Places/i)).toHaveLength(2);
    expect(screen.getByText(/3 places to stay in Paris/i)).toBeInTheDocument();

  });

  it('should render Login page, when user navigate to /login', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render Property page, when user navigate to /offer/:id', () => {
    const id = offers[0].id;

    history.push(`${AppRoute.Offer}/${id}`);

    render(fakeApp);

    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });

  it('should render NotFound page, when user navigate to non-existent route', () => {
    history.push('/non-existing-route');

    render(fakeApp);

    expect(screen.getByText(/Error 404: Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to homepage/i)).toBeInTheDocument();
  });
});
