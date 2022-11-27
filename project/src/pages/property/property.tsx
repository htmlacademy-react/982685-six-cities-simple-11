import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListReviews from '../../components/list-reviews/list-reviews';
import FormReview from '../../components/form-review/form-review';
import Map from '../../components/map/map';
import ListOffers from '../../components/list-offers/list-offers';
import Spinner from '../../components/spinner/spinner';
import { useAppSelector } from '../../hooks';
import { fetchOfferAction, fetchNearbyOffersAction } from '../../store/api-actions';
import { store } from '../../store/index';
import { AuthorizationStatus, BlockPlaces } from '../../const';
import { getWidthRating } from '../../utils/utils';
import { getCurrentOffer, getNearbyOffers } from '../../store/offer-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function Property(): JSX.Element {
  const { id } = useParams();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    const hotelId = Number(id);
    store.dispatch(fetchOfferAction(hotelId));
    store.dispatch(fetchNearbyOffersAction(hotelId));
  }, [id]);

  const currentOffer = useAppSelector(getCurrentOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);

  if (!currentOffer) {
    return (
      <Spinner />
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
              <section className="property__reviews reviews">
                <ListReviews hotelId={hotelId} />
                {(authorizationStatus === AuthorizationStatus.Auth) && <FormReview hotelId={hotelId} />}
              </section>
            </div>
          </div>
          <Map
            classlist={'property__map map'}
            city={currentOffer.city}
            offers={[...nearbyOffers, currentOffer]}
            selectedOfferId={currentOffer.id}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <ListOffers block={BlockPlaces.NearPlaces} offers={nearbyOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
