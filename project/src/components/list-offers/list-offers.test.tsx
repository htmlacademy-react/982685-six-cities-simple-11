import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import { BlockPlaces, NameSpace } from '../../const';
import { mockOffers } from '../../utils/mocks';
import ListOffers from './list-offers';

const offers = mockOffers();

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.Offer]: { offers }
});

const history = createMemoryHistory();

describe('Component: ListOffers', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ListOffers block={BlockPlaces.Cities} offers={offers} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getAllByRole('img')).toHaveLength(offers.length);
  });
});
