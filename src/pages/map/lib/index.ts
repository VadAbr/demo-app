import Leaflet from 'leaflet';

import { TMarker, Accessibility, MarkerType } from '../store';
import {
  medicineIcon,
  sportIcon,
  theaterIcon,
  governmentIcon,
  markerIcon,
  museumIcon,
  restIcon,
  schoolIcon,
  cafeIcon,
} from '../icons';
import { ChipProps } from '@mui/material';

const getIconByType = (markerType: TMarker['type']) => {
  if (markerType === undefined) {
    return markerIcon;
  }

  switch (markerType) {
    case MarkerType.government:
      return governmentIcon;
    case MarkerType.culture:
      return theaterIcon;
    case MarkerType.museum:
      return museumIcon;
    case MarkerType.education:
      return schoolIcon;
    case MarkerType.sport:
      return sportIcon;
    case MarkerType.cafe:
      return cafeIcon;
    case MarkerType.medicine:
      return medicineIcon;
    case MarkerType.rest:
      return restIcon;
    default:
      return markerIcon;
  }
};

const getClassNameByAccessibility = (accessibility: TMarker['accessibility']) => {
  switch (accessibility) {
    case Accessibility.full:
      return 'green';
    case Accessibility.none:
      return 'red';
    case Accessibility.partially:
      return 'yellow';
    case Accessibility.temporarily_unavailable:
      return 'orange';
    default:
      return undefined;
  }
};

export const prepareMarkers = (markers: TMarker[]) => {
  return markers.map((el) => ({
    ...el,
    icon: Leaflet.divIcon({
      html: getIconByType(el.type),
      iconSize: [30, 30],
      className: getClassNameByAccessibility(el.accessibility),
    }),
  }));
};

export const getChipTypeData = (
  type?: MarkerType,
): { color: ChipProps['color']; label: string } => {
  let label = '';
  let color: ChipProps['color'] = 'primary';

  if (type === undefined) {
    return { label, color };
  }

  switch (type) {
    case MarkerType.cafe: {
      label = 'Кафе/ресторан';
      color = 'success';
      break;
    }

    case MarkerType.rest: {
      label = 'Отель/База отдыха';
      color = 'primary';
      break;
    }

    case MarkerType.medicine: {
      label = 'Медицинское учреждение';
      color = 'error';
      break;
    }

    case MarkerType.sport: {
      label = 'Учреждение физ. культуры';
      color = 'info';
      break;
    }

    case MarkerType.museum: {
      label = 'Музей';
      color = 'warning';
      break;
    }

    case MarkerType.government: {
      label = 'Учреждение гос. и мун. служб';
      color = 'default';
      break;
    }

    case MarkerType.culture: {
      label = 'Учреждение культуры';
      color = 'primary';
      break;
    }

    case MarkerType.education: {
      label = 'Образовательная организациа';
      color = 'success';
      break;
    }
  }

  return { label, color };
};

export const getChipAccessData = (
  access?: Accessibility,
): { color: ChipProps['color']; label: string } => {
  let label = '';
  let color: ChipProps['color'] = 'primary';

  if (access === undefined) {
    return { label, color };
  }

  switch (access) {
    case Accessibility.full: {
      label = 'Полная';
      color = 'success';
      break;
    }

    case Accessibility.none: {
      label = 'Отсутсвует';
      color = 'error';
      break;
    }

    case Accessibility.temporarily_unavailable: {
      label = 'Временно недоступно';
      color = 'warning';
      break;
    }

    case Accessibility.partially: {
      label = 'Частичная';
      color = 'primary';
      break;
    }
  }

  return { label, color };
};
