import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '@shared/constants';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PlaceIcon from '@mui/icons-material/Place';
import WorkIcon from '@mui/icons-material/Work';
import * as styles from './styles.scss';

export const PageLayer: React.FC<any> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <BottomNavigation value={location.pathname} showLabels className={styles.nav}>
        <BottomNavigationAction
          value={ROUTES.map}
          icon={<PlaceIcon />}
          label="Карта"
          onClick={() => navigate(ROUTES.map)}
        />
        <BottomNavigationAction
          value={ROUTES.player}
          icon={<TravelExploreIcon />}
          label="Экскурсии"
          onClick={() => navigate(ROUTES.player)}
        />
        <BottomNavigationAction
          value={ROUTES.work}
          icon={<WorkIcon />}
          label="Работа"
          onClick={() => navigate(ROUTES.work)}
        />
      </BottomNavigation>
      {children}
    </>
  );
};
