import React from 'react';

import * as styles from './styles.scss';
import { PageLayer } from '@shared/ui';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@shared/constants';

type TVideo = {
  image: string;
  name: string;
  path?: string;
};

const VIDEOS: TVideo[] = [
  {
    name: 'Озеро Байкал',
    image: 'https://radioiskatel.ru/wp-content/uploads/2018/10/ozero-bajkal-5.jpg',
    path: ROUTES.player + '/1',
  },
  // {
  //   name: 'Куршская коса',
  //   image: 'https://kaliningradinfo.ru/upload/iblock/89e/89e1b31e36070207303a4218dcd41c82.jpg',
  // },
  // {
  //   name: 'Плато Путорана',
  //   image: 'https://cdn.culture.ru/c/65819.jpg',
  // },
];

export const Page = () => {
  const navigate = useNavigate();

  return (
    <PageLayer>
      <div className={styles.container}>
        <h1>VR экскурсии</h1>

        <h3>Выберите экскурсию для просмотра</h3>

        <ul className={styles.list}>
          {VIDEOS.map((el, index) => (
            <li key={index} onClick={() => el?.path && navigate(el.path)}>
              <img src={el.image} alt={el.name} />
              <p>{el.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageLayer>
  );
};
