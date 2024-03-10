// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import L from 'leaflet';
import { useMap } from 'react-leaflet';
import React, { useEffect } from 'react';
import { TMarker } from '@pages/map/store';

type TRouting = {
  route: TMarker[];
};

export const Routing: React.FC<TRouting> = ({ route }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || route.length < 2) return;

    const routingControl = L.Routing.control({
      waypoints: route.map((el) => L.latLng(el.coords[0], el.coords[1])),
      lineOptions: {
        styles: [{ color: '#6FA1EC', weight: 4 }],
      },
      show: true,
      collapsible: true,
      addWaypoints: false,
      routeWhileDragging: true,
      fitSelectedRoutes: true,
      showAlternatives: false,
      language: 'ru',
      createMarker: () => false,
    }).addTo(map);

    return () => {
      map?.removeControl(routingControl);
    };
  }, [map, route]);

  return null;
};
