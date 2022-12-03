import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import { AuthorizationStatus, NameSpace } from '../../const';
import { mockUser } from '../../utils/mocks';
import Layout from './layout';

const history = createMemoryHistory();
const mockStore = configureMockStore();

describe('Component: Layout', () => {
  it('should render correctly, when user not authorized', () => {
    const store = mockStore({
      [NameSpace.User]: { authorizationStatus: AuthorizationStatus.NoAuth, user: undefined },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Layout />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('should render correctly, when user authorized', () => {
    const user = mockUser();
    const store = mockStore({
      [NameSpace.User]: { authorizationStatus: AuthorizationStatus.Auth, user },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Layout />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(user.email)).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });
});
