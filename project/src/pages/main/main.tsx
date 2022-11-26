import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import ListCities from '../../components/list-cities/list-cities';
import ListOffers from '../../components/list-offers/list-offers';
import SortingOptions from '../../components/sorting-options/sorting-options';
import Map from '../../components/map/map';
import MainEmpty from '../../components/main-empty/main-empty';
import { BlockPlaces } from '../../const';
import { getOffersByCity } from '../../utils/utils';
import sortOffers from '../../utils/sort-offers';

function Main(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);
  const sortOptionOffers = useAppSelector((state) => state.sortOptionOffers);
  const selectedOfferId = useAppSelector((state) => state.selectedOfferId);

  const cityOffers = getOffersByCity(allOffers, currentCity);
  const numberOffers = cityOffers.length;
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
            <ListCities currentCity={currentCity} />
          </section>
        </div>
        <div className="cities">
          {isOffers ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{numberOffers} places to stay in {currentCity.name}</b>
                <SortingOptions />
                <ListOffers block={BlockPlaces.Cities} offers={sortOffers(cityOffers, sortOptionOffers)} />
              </section>
              <div className="cities__right-section">
                <Map classlist={'cities__map map'} city={currentCity} offers={cityOffers} selectedOfferId={selectedOfferId}/>
              </div>
            </div>
          ) :
            <MainEmpty cityName={currentCity.name} />}
        </div>
      </main>
    </div>
  );
}

export default Main;
