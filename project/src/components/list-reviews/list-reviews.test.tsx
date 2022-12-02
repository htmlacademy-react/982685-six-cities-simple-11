import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import { AuthorizationStatus, NameSpace } from '../../const';
import { mockReviews } from '../../utils/mocks';
import ListReviews from './list-reviews';

const reviews = mockReviews();

const history = createMemoryHistory();

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.User]: { authorizationStatus: AuthorizationStatus.Auth },
  [NameSpace.Review]: { currentOfferReviews: reviews },
});

describe('Component: ListReviews', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ListReviews hotelId={1} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(reviews.length);
    expect(screen.getAllByText(/Rating/i)).toHaveLength(reviews.length + 1);
  });
});
