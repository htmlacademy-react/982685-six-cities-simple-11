import { Helmet } from 'react-helmet-async';
import ListCities from '../../components/list-cities/list-cities';
import ListOffers from '../../components/list-offers/list-offers';
import SortingOptions from '../../components/sorting-options/sorting-options';
import Map from '../../components/map/map';
import MainEmpty from '../../components/main-empty/main-empty';
import { useAppSelector } from '../../hooks';
import { getCity, getSelectedOfferId} from '../../store/app-process/selectors';
import { getSortedOffers } from '../../store/offer-process/selectors';
import { BlockPlace } from '../../const';

function Main(): JSX.Element {
  const currentCity = useAppSelector(getCity);
  const sortedOffers = useAppSelector(getSortedOffers);
  const selectedOfferId = useAppSelector(getSelectedOfferId);

  const numberOffers = sortedOffers.length;
  const isOffers = (numberOffers > 0);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities simple: Main</title>
      </Helmet>

      <main className={`page__main page__main--index${isOffers ? '' : ' page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ListCities />
          </section>
        </div>
        <div className="cities">
          {isOffers ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{numberOffers} places to stay in {currentCity.name}</b>
                <SortingOptions />
                <ListOffers block={BlockPlace.Cities} offers={sortedOffers} />
              </section>
              <div className="cities__right-section">
                <Map classlist={'cities__map map'} offers={sortedOffers} selectedOfferId={selectedOfferId}/>
              </div>
            </div>
          ) :
            <MainEmpty />}
        </div>
      </main>
    </div>
  );
}

export default Main;
