import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Markers } from './data';
import { prepareMarkers } from '../lib';
import { RootState } from '@app/store';
import type { TMarker } from './types';

type TSlice = {
  markers: ReturnType<typeof prepareMarkers>;
  chosenMarker: TMarker | null;
  route: TMarker[];
  isRoutePanelActive: boolean;
};

const initialState: TSlice = {
  markers: prepareMarkers(Markers),
  chosenMarker: null,
  route: [],
  isRoutePanelActive: false,
};
export const slice = createSlice({
  name: 'map',
  initialState: initialState,
  reducers: {
    chooseMarker(state, action: PayloadAction<TSlice['chosenMarker']>) {
      state.chosenMarker = action.payload;
    },
    addRoute(state, action: PayloadAction<TMarker>) {
      state.route.push(action.payload);
    },
    switchRoutePanelActive(state, action: PayloadAction<boolean>) {
      state.isRoutePanelActive = action.payload;
    },
    resetRoute(state) {
      state.route = [];
    },
  },
});

export { MarkerType, Accessibility, type TMarker } from './types';
export const mapSelector = (state: RootState) => state.map;
export const markersSelector = createSelector(mapSelector, (map: TSlice) => map.markers);
export const chosenMarkerSelector = createSelector(mapSelector, (map: TSlice) => map.chosenMarker);
export const routeSelector = createSelector(mapSelector, (map: TSlice) => map.route);
export const routePanelActiveSelector = createSelector(
  mapSelector,
  (map: TSlice) => map.isRoutePanelActive,
);

export const isChosenMarkerInRouteSelector = createSelector(
  chosenMarkerSelector,
  routeSelector,
  (currentMarker, route) => Boolean(route.find((el) => el.name === currentMarker?.name)),
);

export const { chooseMarker, addRoute, switchRoutePanelActive, resetRoute } = slice.actions;
