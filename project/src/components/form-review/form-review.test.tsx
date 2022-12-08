import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import FormReview from './form-review';
import { NameSpace, Rating } from '../../const';

const history = createMemoryHistory();

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.Review]: { currentOfferReviews: [] }
});

describe('Component: FormReview', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FormReview hotelId={1} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByLabelText(/Your review/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('star-rating')).toHaveLength(Rating.MaxStars);
    expect(screen.getByPlaceholderText(/Tell how was your stay, what you like and what can be improved/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
