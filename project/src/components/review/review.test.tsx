import { render, screen } from '@testing-library/react';
import { mockReview } from '../../utils/mocks';
import HistoryRouter from '../history-router/history-router';
import { createMemoryHistory } from 'history';
import Review from './review';

const review = mockReview();
const history = createMemoryHistory();

describe('Component: Review', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <Review review={review} />
      </HistoryRouter>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveClass('reviews__avatar');
    expect(screen.getByText(review.user.name)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  });
});
