import React from 'react';
import { PageLayer } from '@shared/ui';
import ReactPlayer from 'react-player';

export const PlayerItem = () => {
  return (
    <PageLayer>
      <ReactPlayer
        config={{
          youtube: {
            playerVars: {
              autoplay: true,
              controls: 2,
              iv_load_policy: 3,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
            },
            embedOptions: {
              suggestedQuality: 'highres',
            },
          },
        }}
        width={'100%'}
        height={'95%'}
        url="https://www.youtube.com/watch?v=3OdBuARjiJY&ab_channel=%D0%92%D0%B0%D0%B4%D0%B8%D0%BC%D0%90%D0%B1%D1%80%D0%B0%D0%BC%D0%BE%D0%B2"
      />
    </PageLayer>
  );
};
