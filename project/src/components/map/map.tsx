import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City, Offers, Offer } from '../../types/types';
import { MARKER_DEFAULT_URL, MARKER_ACTIVE_URL } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer?: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: MARKER_DEFAULT_URL,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const activeCustomIcon = new Icon({
  iconUrl: MARKER_ACTIVE_URL,
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

function Map({ city, offers, selectedOffer = undefined }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (!map) { return; }

    offers.forEach(({ location, title }) => {
      const marker = new Marker({
        lat: location.latitude,
        lng: location.longitude,
      });

      marker
        .setIcon(
          selectedOffer && (title === selectedOffer.title)
            ? activeCustomIcon
            : defaultCustomIcon
        )
        .addTo(map);
    });
  }, [map, offers, selectedOffer]);

  return <div style={{ height: 'calc(100vh - 185.8px)' }} ref={mapRef}></div>;
}

export default Map;
