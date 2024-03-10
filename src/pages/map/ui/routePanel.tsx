import React from 'react';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import {
  switchRoutePanelActive,
  routeSelector,
  routePanelActiveSelector,
  resetRoute,
} from '../store';
import * as styles from './styles.scss';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Button } from '@mui/material';

export const RoutePanel = () => {
  const route = useSelector(routeSelector);
  const isPanelOpened = useSelector(routePanelActiveSelector);

  const dispatch = useDispatch();

  const close = () => {
    dispatch(switchRoutePanelActive(false));
  };

  const onClick = () => {
    close();
    dispatch(resetRoute());
  };

  return (
    <Drawer onClose={close} open={isPanelOpened}>
      <div className={styles.modal}>
        <h3 className={styles.title}>Построенный маршрут</h3>

        <div>
          <Timeline>
            {route.map((el, index) => (
              <TimelineItem key={el.name}>
                <TimelineSeparator>
                  <TimelineDot />
                  {index !== route.length - 1 && <TimelineConnector />}
                </TimelineSeparator>

                <TimelineContent>{el.name}</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        <Button fullWidth color="error" variant="contained" onClick={onClick}>
          Сбросить маршрут
        </Button>
      </div>
    </Drawer>
  );
};
