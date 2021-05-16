import React from 'react';
import { Player } from '@components/Media/Player';
import { Context } from '../../Provider';

export const PlayerComponent = () => {
  const { episode } = React.useContext(Context);

  return <Player src={episode.src} />;
};
