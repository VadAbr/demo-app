import React from 'react';
import * as styles from './styles.scss';
import { Job } from './index';

export const JobCard = (props: Job) => {
  return (
    <div className={styles.card}>
      <a className={styles.cardTitle} href={props.url} target="_blank" rel="noreferrer">
        {props.title}
      </a>
      <p className={styles.cardSalary}>{props.salary}</p>
      <p className={styles.cardCompany}>{props.employer}</p>
      <p className={styles.cardExpirience}>
        <span style={{ fontWeight: 'bold' }}>Опыт:</span> {props.experience}
      </p>
    </div>
  );
};
