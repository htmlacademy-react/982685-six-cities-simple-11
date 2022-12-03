import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import LoadError from './load-error';

const mockStore = configureMockStore();

const store = mockStore({});

describe('Component: LoadError', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <LoadError />
      </Provider>
    );

    expect(screen.getByText(/Failed to load offers/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any offers available at the moment/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Try again')).toBeInTheDocument();
  });
});
