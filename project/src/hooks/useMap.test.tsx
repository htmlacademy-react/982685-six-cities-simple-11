import { MutableRefObject } from 'react';
import { renderHook } from '@testing-library/react';
import { Map } from 'leaflet';
import useMap from './useMap';
import { mockCity } from '../utils/mocks';

const mapContainer: MutableRefObject<HTMLElement | null> = { current: document.createElement('div') };
const city = mockCity();

describe('Hook: useMap', () => {
  it('should return object type of Map', () => {
    const { result } = renderHook(() =>
      useMap(mapContainer, city)
    );

    const map = result.current;

    expect(map).toBeInstanceOf(Map);
  });
});
