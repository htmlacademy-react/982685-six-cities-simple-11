import { useRef, useEffect } from 'react';
import { Icon, LayerGroup, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { useAppSelector } from '../../hooks';
import { getCity } from '../../store/app-process/selectors';
import { Offers } from '../../types/offers';
import { Leaflet } from '../../const';
import 'leaflet/dist/leaflet.css';

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

type MapProps = {
  classlist: string;
  offers: Offers;
  selectedOfferId?: number;
};

function Map({ classlist, offers, selectedOfferId = undefined }: MapProps): JSX.Element {
  const city = useAppSelector(getCity);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (!map) { return; }

    map.setView([city.location.latitude, city.location.longitude], city.location.zoom);

    const markers = offers.map(({ id, location }) =>
      new Marker(
        [location.latitude, location.longitude],
        { icon: selectedOfferId && (id === selectedOfferId) ? activeCustomIcon : defaultCustomIcon }
      )
    );

    const markersGroup = new LayerGroup(markers);
    markersGroup.addTo(map);

    return () => {
      map.removeLayer(markersGroup);
    };
  }, [map, offers, city, selectedOfferId]);

  return (
    <section className={classlist}>
      <div style={{ height: '100%' }} ref={mapRef} data-testid="leaflet-map" />
    </section>
  );
}

export default Map;
