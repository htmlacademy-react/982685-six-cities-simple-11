import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../../components/history-router/history-router';
import { createMemoryHistory } from 'history';
import { Route, Routes } from 'react-router-dom';
import NotFound from './not-found';

const history = createMemoryHistory();

describe('Page: NotFound', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <NotFound />
        </HelmetProvider>
      </HistoryRouter>
    );

    expect(screen.getByText(/Error 404: Page not found/i)).toBeInTheDocument();

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveClass('locations__item-link');
    expect(screen.getByText(/Go to homepage/i)).toBeInTheDocument();
  });

  it('should redirect to root URL when user clicked to link', async () => {
    history.push('/fake');

    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/" element={<h1>This is main page</h1>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </HistoryRouter>
      </HelmetProvider>
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('link'));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
