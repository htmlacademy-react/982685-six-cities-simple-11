import { render, screen } from '@testing-library/react';
import { mockOffer } from '../../utils/mocks';
import HistoryRouter from '../history-route/history-route';
import { createMemoryHistory } from 'history';
import OfferCard from './offer-card';
import { BlockPlaces } from '../../const';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const offer = mockOffer();
const history = createMemoryHistory();
const onOfferCardHover = jest.fn();

describe('Component: PlaceCard', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <OfferCard block={BlockPlaces.Cities} offer={offer} onOfferCardHover={onOfferCardHover} />
      </HistoryRouter>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveClass('place-card__image');
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
    expect(screen.getByText(`€${offer.price}`)).toBeInTheDocument();
    expect(screen.getByText(offer.title)).toBeInTheDocument();
    expect(screen.getByText(offer.type)).toBeInTheDocument();
  });

  describe('should redirect to Property page', () => {
    const id = offer.id;

    it('when user clicked to link on image', async () => {
      history.push('/fake');

      render(
        <HistoryRouter history={history}>
          <Routes>
            <Route path={`/offer/${id}`} element={<h1>This is Property page</h1>} />
            <Route path='*' element={
              <OfferCard block={BlockPlaces.Cities} offer={offer} onOfferCardHover={onOfferCardHover} />
            }
            />
          </Routes>
        </HistoryRouter>
      );

      expect(screen.queryByText(/This is Property page/i)).not.toBeInTheDocument();
      await userEvent.click(screen.getByTestId('link-card__image'));
      expect(screen.getByText(/This is Property page/i)).toBeInTheDocument();
    });

    it('when user clicked to link on title', async () => {
      history.push('/fake');

      render(
        <HistoryRouter history={history}>
          <Routes>
            <Route path={`/offer/${id}`} element={<h1>This is Property page</h1>} />
            <Route path='*' element={
              <OfferCard block={BlockPlaces.Cities} offer={offer} onOfferCardHover={onOfferCardHover} />
            }
            />
          </Routes>
        </HistoryRouter>
      );

      expect(screen.queryByText(/This is Property page/i)).not.toBeInTheDocument();
      await userEvent.click(screen.getByTestId('link-card__title'));
      expect(screen.getByText(/This is Property page/i)).toBeInTheDocument();
    });
  });
});
