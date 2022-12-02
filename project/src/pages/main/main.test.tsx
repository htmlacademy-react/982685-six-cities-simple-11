import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import { mockOffers } from '../../utils/mocks';
import { InitialCity, NameSpace, SortType } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import Main from './main';

const history = createMemoryHistory();

const mockStore = configureMockStore();
const offers = mockOffers();

const store = mockStore({
  [NameSpace.App]: { city: InitialCity, sortOptionOffers: SortType.Popular, selectedOfferId: undefined },
  [NameSpace.Offer]: { offers, }
});

describe('Page: Main', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Main />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });
});
