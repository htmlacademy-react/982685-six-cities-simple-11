import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import ListCities from './list-cities';
import { CityName, NameSpace } from '../../const';
import { mockCity } from '../../utils/mocks';

const city = mockCity();
const history = createMemoryHistory();

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.App]: { city }
});

describe('Component: ListCities', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ListCities />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getAllByRole('link')).toHaveLength(6);
    expect(screen.getByText(CityName.Paris)).toBeInTheDocument();
    expect(screen.getByText(CityName.Cologne)).toBeInTheDocument();
    expect(screen.getByText(CityName.Brussels)).toBeInTheDocument();
    expect(screen.getByText(CityName.Amsterdam)).toBeInTheDocument();
    expect(screen.getByText(CityName.Hamburg)).toBeInTheDocument();
    expect(screen.getByText(CityName.Dusseldorf)).toBeInTheDocument();
  });
});

