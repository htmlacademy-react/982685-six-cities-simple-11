import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City, Offers, Offer } from '../../types/types';
import { Leaflet } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  heightMap: string;
  city: City;
  offers: Offers;
  selectedOffer?: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: Leaflet.MarkerDefaultUrl,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const activeCustomIcon = new Icon({
  iconUrl: Leaflet.MarkerActiveUrl,
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

function Map({ heightMap, city, offers, selectedOffer = undefined }: MapProps): JSX.Element {
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

  return <div style={{ height: heightMap }} ref={mapRef}></div>;
}

export default Map;
