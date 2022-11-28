
import { useAppDispatch } from '../../hooks';
import { fetchOffersAction } from '../../store/api-actions';

function LoadError(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">Failed to load offers</b>
            <p className="cities__status-description">We could not find any offers available at the moment</p>
            <button
              className="locations__item locations__item-link"
              type="button"
              onClick={() => { dispatch(fetchOffersAction()); }}
            >
              Try again
            </button>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    </main>
  );
}

export default LoadError;
