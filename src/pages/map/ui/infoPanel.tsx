import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  chooseMarker,
  chosenMarkerSelector,
  addRoute,
  isChosenMarkerInRouteSelector,
} from '@pages/map/store';
import * as styles from './styles.scss';
import { Chip } from '@mui/material';
import { getChipAccessData, getChipTypeData } from '../lib';

export const InfoPanel = () => {
  const chosenMarker = useSelector(chosenMarkerSelector);
  const isInRoute = useSelector(isChosenMarkerInRouteSelector);

  const dispatch = useDispatch();

  const chipType = getChipTypeData(chosenMarker?.type);
  const chipAccess = getChipAccessData(chosenMarker?.accessibility);

  const close = () => {
    dispatch(chooseMarker(null));
  };

  const addNewRoute = () => {
    if (chosenMarker) {
      dispatch(addRoute(chosenMarker));
      close();
    }
  };

  return (
    <Drawer onClose={close} open={Boolean(chosenMarker)}>
      <div className={styles.modal}>
        <h3 className={styles.title}>{chosenMarker?.name}</h3>

        {chosenMarker?.image && (
          <img className={styles.image} src={chosenMarker?.image} alt={chosenMarker?.name} />
        )}

        <p className={styles.info}>
          <span className={styles.infoTitle}>Тип:</span>
          <Chip label={chipType.label} color={chipType.color} variant="outlined" />
        </p>

        <p className={styles.info}>
          <span className={styles.infoTitle}>Доступность для инвалидов:</span>
          <Chip label={chipAccess.label} color={chipAccess.color} variant="outlined" />
        </p>

        {chosenMarker?.description && (
          <p className={styles.info}>
            <span className={styles.infoTitle}>Описание:</span>{' '}
            <span>{chosenMarker?.description}</span>
          </p>
        )}

        <p className={styles.info}>
          <span className={styles.infoTitle}>Адрес:</span> <span>{chosenMarker?.address}</span>
        </p>

        {!isInRoute && (
          <Button style={{ marginTop: 20 }} fullWidth variant="contained" onClick={addNewRoute}>
            Добавить в маршрут
          </Button>
        )}
      </div>
    </Drawer>
  );
};
