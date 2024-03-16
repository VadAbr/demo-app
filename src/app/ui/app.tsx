import * as styles from './styles.scss';
import '../styles/global.scss';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@shared/constants';
import { MapPage } from '@pages/map';
import { PlayerItemPage, PlayerPage } from '@pages/player';
import { WorkPage } from '@pages/work';
import { CoursesPage } from '@pages/courses';

export const App = () => {
  return (
    <main className={styles.wrapper}>
      <Routes>
        <Route path={ROUTES.map} element={<MapPage />} />
        <Route path={ROUTES.player} element={<PlayerPage />} />
        <Route path={ROUTES.playerItem} element={<PlayerItemPage />} />
        <Route path={ROUTES.work} element={<WorkPage />} />
        <Route path={ROUTES.courses} element={<CoursesPage />} />
        <Route path={ROUTES.other} element={<Navigate replace to={ROUTES.map} />} />
      </Routes>
    </main>
  );
};
