import React from 'react';
import { Player } from '@components/Media/Player';
import useEpisode from '@modules/Watch/hooks/useEpisode';

const EpisodePlayer = () => {
  const { data } = useEpisode();

  return <Player src={data.episode.src} />;
};

export default EpisodePlayer;
