import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListReviews from '../../components/list-reviews/list-reviews';
import Map from '../../components/map/map';
import ListOffers from '../../components/list-offers/list-offers';
import Spinner from '../../components/spinner/spinner';
import NotFound from '../not-found/not-found';
import { useAppSelector } from '../../hooks';
import { store } from '../../store/index';
import { fetchCurrentOfferAction, fetchNearbyOffersAction, fetchOfferReviwsAction, } from '../../store/api-actions';
import { getCurrentOffer, getCurrentOfferLoadingStatus, getNearbyOffers } from '../../store/offer-process/selectors';
import { getWidthRating } from '../../utils/utils';
import { BlockPlace } from '../../const';

function Property(): JSX.Element {
  const { id } = useParams();

  useEffect(() => {
    const hotelId = Number(id);
    store.dispatch(fetchCurrentOfferAction(hotelId));
    store.dispatch(fetchNearbyOffersAction(hotelId));
    store.dispatch(fetchOfferReviwsAction(hotelId));
  }, [id]);

  const currentOffer = useAppSelector(getCurrentOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const isOfferLoading = useAppSelector(getCurrentOfferLoadingStatus);

  if (!currentOffer && isOfferLoading) {
    return (
      <Spinner />
    );
  }

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
                  <span style={{ width: `${getWidthRating(rating)}%` }}></span>
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
              <ListReviews hotelId={hotelId} />
            </div>
          </div>
          <Map
            classlist={'property__map map'}
            offers={[...nearbyOffers, currentOffer]}
            selectedOfferId={currentOffer.id}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <ListOffers block={BlockPlace.NearPlaces} offers={nearbyOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
