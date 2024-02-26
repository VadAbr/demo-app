import * as commonStyles from '../styles/common.module.scss';
import * as styles from './app.module.scss';
import React from 'react';
import cn from 'classnames';
import { BrowserRouter as Router } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <div className={styles.wrapper}>
        <main className={cn(commonStyles.container, styles.content)}>Test1</main>
      </div>
    </Router>
  );
};
