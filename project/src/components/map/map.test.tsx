import { render, screen } from '@testing-library/react';
import { mockOffers } from '../../utils/mocks';
import Map from './map';

const offers = mockOffers();

describe('Component: Map', () => {
  it('should render correctly', () => {
    render(
      <Map classlist={'cities__map map'} offers={offers} />
    );

    expect(screen.getByTestId('leaflet-map')).toBeInTheDocument();
    expect(screen.getByTestId('leaflet-map')).toHaveClass('leaflet-container');
  });
});
