import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../../components/history-route/history-route';
import { createMemoryHistory } from 'history';
import { AuthorizationStatus, NameSpace } from '../../const';
import Login from './login';

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    user: undefined,
  },
});

describe('Page: Login', () => {
  it('should render Login page when user navigate to URL \\login', async () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Login />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Sign in/i)).toHaveLength(2);
    expect(screen.getByRole('button')).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('login'), 'Oliver.conner@gmail.com');
    await userEvent.type(screen.getByTestId('password'), 'Pass123456');
    expect(screen.getByDisplayValue(/Oliver.conner@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Pass123456/i)).toBeInTheDocument();
  });
});
