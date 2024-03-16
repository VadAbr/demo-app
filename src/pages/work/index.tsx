import React, { useRef, useState } from 'react';
import { PageLayer } from '@shared/ui';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import { getJobs } from '@pages/work/api';
import * as styles from './styles.scss';
import { MenuItem } from '@mui/material';
import { JobCard } from './jobCard';
import { Loader } from './loader';
import Checkbox from '@mui/material/Checkbox';

export type Job = {
  title: string;
  url: string;
  salary: string;
  employer: string;
  experience: string;
  addInfo: string[];
  logoEmployerSrc: string;
};

const cities = [
  {
    label: 'Поиск по России',
    value: 'russia',
  },
  {
    label: 'Тума',
    value: 'tuma',
  },
  {
    label: 'Спас-Клепики',
    value: 'spas-klepiki',
  },
];

export const WorkPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentCity, setCurrentCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isForDisabled, setIsForDisabled] = useState(false);
  const [isPlaceholderActive, setIsPlaceholderActive] = useState(false);
  const isFirstRequest = useRef(false);

  const search = () => {
    setIsLoading(true);
    setIsPlaceholderActive(false);
    getJobs({ city: currentCity, isForDisabled: isForDisabled })
      .then((res) => {
        if (isFirstRequest.current && res.jobs?.length === 0) {
          setIsPlaceholderActive(true);
        }
        setJobs(res.jobs);
      })
      .finally(() => {
        isFirstRequest.current = true;
        setIsLoading(false);
      });
  };

  const onChangeCity = (event: any) => {
    setCurrentCity(event.target.value);
  };

  const onChangeCheckbox = () => {
    setIsForDisabled((prevState) => !prevState);
  };

  return (
    <PageLayer>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Поиск вакансий</h1>

          <p>Город / Населенный пункт</p>

          <div style={{ width: '100%' }}>
            <Select
              placeholder={'Выберите город для поиска'}
              onChange={onChangeCity}
              value={currentCity}
              fullWidth
              disabled={isLoading}
            >
              {cities.map((el) => (
                <MenuItem key={el.value} value={el.value}>
                  {el.label}
                </MenuItem>
              ))}
            </Select>

            <div style={{ display: 'flex', alignItems: 'center', width: '312px', margin: '0 auto' }}>
              <Checkbox onChange={onChangeCheckbox} />
              <span>Доступные людям с инвалидностью</span>
            </div>
          </div>

          <Button
            style={{ width: '150px' }}
            variant="contained"
            onClick={search}
            disabled={!currentCity || isLoading}
          >
            Поиск
          </Button>

          {isPlaceholderActive && <div className={styles.loader}>Вакансии не найдены</div>}

          {isLoading ? (
            <div className={styles.loader}>
              <Loader />
            </div>
          ) : (
            <div className={styles.cardList}>
              {jobs.map((el) => (
                <JobCard key={el.url} {...el} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageLayer>
  );
};
