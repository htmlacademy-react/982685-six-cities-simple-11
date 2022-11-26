import { useRef, useEffect } from 'react';
import { Icon, LayerGroup, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City, Offers } from '../../types/types';
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
  city: City;
  offers: Offers;
  selectedOfferId?: number;
};

function Map({ classlist, city, offers, selectedOfferId = undefined }: MapProps): JSX.Element {
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
      <div style={{ height: '100%' }} ref={mapRef} />
    </section>
  );
}

export default Map;
