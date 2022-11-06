import { MutableRefObject, useState, useRef, useEffect } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from '../types/types';
import { LEAFLET_URL, LEAFLET_ATTRIBUTION } from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(LEAFLET_URL, { attribution: LEAFLET_ATTRIBUTION });
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }

  }, [mapRef, city]);

  return map;
}

export default useMap;
