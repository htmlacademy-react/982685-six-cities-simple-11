import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City, Points } from '../../types/types';
import { MARKER_DEFAULT_URL} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: Points;
};

const defaultCustomIcon = new Icon({
  iconUrl: MARKER_DEFAULT_URL,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map({ city, points }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker.setIcon(defaultCustomIcon).addTo(map);
      });
    }
  }, [map, points]);

  return <div style={{height: 'calc(100vh - 185.8px)'}} ref={mapRef}></div>;
}

export default Map;
