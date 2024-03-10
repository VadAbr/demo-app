import React, { useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Badge, Button } from '@mui/material';
import NearMeIcon from '@mui/icons-material/NearMe';
import { PageLayer } from '@shared/ui';

import { markersSelector, chooseMarker, routeSelector, switchRoutePanelActive } from '../store';

import { InfoPanel } from './infoPanel';
import { RoutePanel } from './routePanel';
import { Routing } from './routing';

import * as styles from './styles.scss';

import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { Map as LeafletMap } from 'leaflet';

type TMapProps = React.ComponentProps<typeof MapContainer>;

const REGION_COORDS: TMapProps['center'] = [55.081223, 40.416434];

export const Page = () => {
  const map = useRef<LeafletMap>(null);

  const markers = useSelector(markersSelector);
  const route = useSelector(routeSelector);
  const dispatch = useDispatch();

  const onMarkerClick = (marker: (typeof markers)[0]) => {
    dispatch(chooseMarker(marker));
  };

  const openRoutePanel = () => dispatch(switchRoutePanelActive(true));

  const resetCenter = () => {
    map.current?.setView(REGION_COORDS, 10);
  };

  return (
    <PageLayer>
      <MapContainer
        ref={map}
        center={REGION_COORDS}
        zoom={10}
        scrollWheelZoom
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Routing route={route} />

        <MarkerClusterGroup>
          {markers.map((el, index) => (
            <Marker
              position={el.coords}
              key={index}
              icon={el.icon}
              eventHandlers={{ click: () => onMarkerClick(el) }}
            />
          ))}
        </MarkerClusterGroup>

        {route.length > 0 && (
          <Badge badgeContent={route.length} color="warning" className={styles.routeButton}>
            <Button color="info" variant="contained" onClick={openRoutePanel}>
              Маршрут
            </Button>
          </Badge>
        )}

        <Button
          className={styles.recenterButton}
          color="info"
          variant="contained"
          onClick={resetCenter}
        >
          <NearMeIcon />
        </Button>
      </MapContainer>

      <InfoPanel />

      <RoutePanel />
    </PageLayer>
  );
};
