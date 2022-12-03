import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { InitialCity, NameSpace } from '../../const';
import HistoryRouter from '../history-route/history-route';
import MainEmpty from './main-empty';

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.App]: { city: InitialCity }
});

const history = createMemoryHistory();

describe('Component: MainEmpty', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainEmpty />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any property available at the moment/i)).toBeInTheDocument();
  });
});
