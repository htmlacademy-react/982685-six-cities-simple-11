import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { InitialCity, NameSpace } from '../../const';
import { mockOffers } from '../../utils/mocks';
import Map from './map';

const offers = mockOffers();
const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.App]: { city: InitialCity }
});

describe('Component: Map', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Map classlist={'cities__map map'} offers={offers} />
      </Provider>
    );

    expect(screen.getByTestId('leaflet-map')).toBeInTheDocument();
    expect(screen.getByTestId('leaflet-map')).toHaveClass('leaflet-container');
  });
});
