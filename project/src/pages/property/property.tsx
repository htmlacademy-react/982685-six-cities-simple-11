import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListReviews from '../../components/list-reviews/list-reviews';
import FormReview from '../../components/form-review/form-review';
import Map from '../../components/map/map';
import ListOffers from '../../components/list-offers/list-offers';
import NotFound from '../not-found/not-found';
import { useAppSelector } from '../../hooks';
import { BlockPlaces, Leaflet } from '../../const';
import { fetchOfferAction, fetchNearbyOffersAction } from '../../store/api-actions';
import { store } from '../../store/index';
import { AuthorizationStatus } from '../../types/types';
import { setCurrentOfferAction, setNearbyOffersAction } from '../../store/actions';

function Property(): JSX.Element {
  const [, setSelectedOfferId] = useState<number | undefined>(undefined);
  const handleMouseEnterOffer = (offerId: number) => setSelectedOfferId(offerId);
  const handleMouseLeaveOffer = () => setSelectedOfferId(undefined);

  const { id } = useParams();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    const hotelId = Number(id);
    store.dispatch(fetchOfferAction(hotelId));
    store.dispatch(fetchNearbyOffersAction(hotelId));

    return () => {
      setCurrentOfferAction(undefined);
      setNearbyOffersAction([]);
    };
  }, [id]);

  const currentOffer = useAppSelector((state) => state.currentOffer);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);

  if (!currentOffer) {
    return (
      <NotFound />
    );
  }

  const { id: hotelId, host, bedrooms, goods, images, isPremium, maxAdults, price, rating, title, type, description } = currentOffer;

  return (
    <div className="page">
      <Helmet>
        <title>Six cities simple: Property</title>
      </Helmet>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map((image, idx) => (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt={(idx).toString()} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{type}</li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((good) => (
                      <li className="property__inside-item" key={good}>{good}</li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt={host.name} />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.isPro && (<span className="property__user-status">Pro</span>)}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ListReviews hotelId={hotelId} />
                {(authorizationStatus === AuthorizationStatus.Auth) && <FormReview hotelId={hotelId}/>}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map heightMap={Leaflet.HeightMap.Property} city={currentOffer.city} offers={nearbyOffers} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <ListOffers
                block={BlockPlaces.NearPlaces}
                offers={nearbyOffers}
                handleMouseEnterOffer={handleMouseEnterOffer}
                handleMouseLeaveOffer={handleMouseLeaveOffer}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
