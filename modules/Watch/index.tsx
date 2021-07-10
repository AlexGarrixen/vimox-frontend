import React, { FC } from 'react';
import { ProviderWatchStore } from './contexts/WatchStore';
import WatchLayout from './components/WatchLayout';
import Episode from './sections/Episode';
import NextEpisodes from './sections/NextEpisodes';

const Watch: FC<WatchProps> = ({ serieId, episodeId }) => (
  <ProviderWatchStore episodeId={episodeId} serieId={serieId}>
    <WatchLayout
      MainComponent={<Episode />}
      AsideComponent={<NextEpisodes />}
    />
  </ProviderWatchStore>
);

type WatchProps = {
  episodeId: string;
  serieId: string;
};

export default Watch;
