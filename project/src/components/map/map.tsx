import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City, Offers } from '../../types/types';
import { Leaflet } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  heightMap: string;
  city: City;
  offers: Offers;
  selectedOfferId?: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: Leaflet.Marker.DefaultUrl,
  iconSize: [Leaflet.Marker.IconWidth, Leaflet.Marker.IconHegth],
  iconAnchor: [Leaflet.Marker.IconWidth / 2, Leaflet.Marker.IconHegth],
});

const activeCustomIcon = new Icon({
  iconUrl: Leaflet.Marker.ActiveUrl,
  iconSize: [Leaflet.Marker.IconWidth, Leaflet.Marker.IconHegth],
  iconAnchor: [Leaflet.Marker.IconWidth / 2, Leaflet.Marker.IconHegth],
});

function Map({ heightMap, city, offers, selectedOfferId = undefined }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (!map) { return; }

    map.setView([city.location.latitude, city.location.longitude], city.location.zoom);

    offers.forEach(({ id, location }) => {
      const marker = new Marker({
        lat: location.latitude,
        lng: location.longitude,
      });

      marker
        .setIcon(
          selectedOfferId && (id === selectedOfferId)
            ? activeCustomIcon
            : defaultCustomIcon
        )
        .addTo(map);
    });
  }, [map, offers, city, selectedOfferId]);

  return <div style={{ height: heightMap }} ref={mapRef}></div>;
}

export default Map;
