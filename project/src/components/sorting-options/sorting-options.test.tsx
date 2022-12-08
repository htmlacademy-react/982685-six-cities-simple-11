import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import SortingOptions from './sorting-options';
import { NameSpace, SortType } from '../../const';

const history = createMemoryHistory();
const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.App]: {sortOptionOffers: SortType.Popular},
});

describe('Component: Sorting', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SortingOptions />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });
});
