import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import { AuthorizationStatus, NameSpace } from '../../const';
import { mockCity, mockOffer, mockOffers, mockReviews } from '../../utils/mocks';
import Property from './property';

const city = mockCity();
const currentOffer = mockOffer();
const nearbyOffers = mockOffers();
const reviews = mockReviews();

const history = createMemoryHistory();

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.App]: { city: city, },
  [NameSpace.Offer]: { currentOffer: currentOffer, nearbyOffers: nearbyOffers, },
  [NameSpace.Review]: { currentOfferReviews: reviews },
  [NameSpace.User]: { authorizationStatus: AuthorizationStatus.NoAuth, user: undefined },
});

describe('Page: Property', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Property />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(currentOffer.host.name)).toBeInTheDocument();
    expect(screen.getAllByText(/Rating/i)).toHaveLength(7);
    expect(screen.getByText(currentOffer.title)).toBeInTheDocument();
    expect(screen.getByText(`€${currentOffer.price}`)).toBeInTheDocument();
    expect(screen.getByText(currentOffer.description)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });
});
