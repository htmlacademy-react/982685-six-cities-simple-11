import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import Logo from '../../components/logo/logo';
import ListCities from '../../components/list-cities/list-cities';
import ListOffers from '../../components/list-offers/list-offers';
import SortingOptions from '../../components/sorting-options/sorting-options';
import Map from '../../components/map/map';
import MainEmpty from '../main-empty/main-empty';
import { BlockPlaces, Leaflet } from '../../const';
import { getOffersByCity } from '../../utils/utils';
import sortOffers from '../../utils/sort-offers';

function Main(): JSX.Element {
  const [selectedOfferId, setSelectedOfferId] = useState<number | undefined>(undefined);
  const handleMouseEnterOffer = (offerId: number) => setSelectedOfferId(offerId);
  const handleMouseLeaveOffer = () => setSelectedOfferId(undefined);

  const currentCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);
  const sortType = useAppSelector((state) => state.sortOffers);

  const cityOffers = getOffersByCity(allOffers, currentCity);
  const numberOffers = cityOffers.length;
  const isOffers = (numberOffers > 0);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities simple: Main</title>
      </Helmet>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#dummy">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
                <div className="cities__places-list places__list tabs__content">
                  <ListOffers
                    block={BlockPlaces.Cities}
                    offers={sortOffers(cityOffers, sortType)}
                    handleMouseEnterOffer={handleMouseEnterOffer}
                    handleMouseLeaveOffer={handleMouseLeaveOffer}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map heightMap={Leaflet.HeightMap.Main} city={currentCity} offers={cityOffers} selectedOfferId={selectedOfferId}/>
                </section>
              </div>
            </div>
          ) : <MainEmpty city={currentCity} />}
        </div>
      </main>
    </div>
  );
}

export default Main;
