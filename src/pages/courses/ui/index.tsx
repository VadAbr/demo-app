import React from 'react';
import { PageLayer } from '@shared/ui';
import * as styles from './styles.scss';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import GradeIcon from '@mui/icons-material/Grade';

type TCourse = {
  title: string;
  link: string;
  rating: number;
  price: number;
  description: string;
};

const COURSES: TCourse[] = [
  {
    title: 'Веб-дизайнер',
    link: 'https://skillbox.ru/course/profession-webdesigner/',
    rating: 4.7,
    price: 9680,
    description:
      'Веб-дизайнер отвечает за оформление интернет-проекта, занимается не только визуальной его составляющей, но и вопросами удобства пользования сайтом.',
  },
  {
    title: 'Интернет-маркетолог',
    link: 'https://skillbox.ru/course/profession-marketolog/',
    rating: 4.7,
    price: 5782,
    description:
      'Интернет-маркетолог отвечает за продвижение бизнесов, товаров и услуг в сети. Он помогает покупателю и продукту найти друг друга в интернете.',
  },
  {
    title: '3D-дженералист',
    link: 'https://skillbox.ru/course/3d-generalist/',
    rating: 4.9,
    price: 7626,
    description:
      '3D-дженералисты востребованы во многих направлениях: они создают персонажей, технику и окружение для видеоигр, кино, анимационных роликов и рекламы.',
  },
];

export const Courses = () => {
  return (
    <PageLayer>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Программы обучения</h1>

          <div className={styles.list}>
            {COURSES.map((el) => (
              <a
                href={el.link}
                target="_blank"
                rel="noreferrer"
                key={el.title}
                className={styles.card}
              >
                <p className={styles.title}>{el.title}</p>

                <p className={styles.description}>{el.description}</p>

                <div className={styles.footer}>
                  <span className={styles.price}>
                    {el.price}
                    <sup>
                      <CurrencyRubleIcon fontSize={'small'} />
                      /месяц
                    </sup>
                  </span>

                  <span className={styles.rating}>
                    <GradeIcon color={'warning'} /> {el.rating}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageLayer>
  );
};
