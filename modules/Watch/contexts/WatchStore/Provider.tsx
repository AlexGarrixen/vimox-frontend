import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { getEpisode, getNextEpisodes } from '@services/episodes';
import useUpdateLastEpisodeWatched from '@modules/Watch/hooks/useUpdateLastEpisodeWatched';
import { Context } from './Context';

export const ProviderWatchStore: FC<ProviderWatchStoreProps> = ({
  children,
  episodeId,
  serieId,
}) => {
  const episodeQuery = useQuery(
    ['episode_watch', episodeId],
    ({ queryKey }) => getEpisode(queryKey[1]),
    { refetchIntervalInBackground: false }
  );

  const nextEpisodesQuery = useQuery(
    ['next_episodes', episodeId],
    ({ queryKey }) => getNextEpisodes(queryKey[1]),
    { refetchIntervalInBackground: false }
  );

  useUpdateLastEpisodeWatched({ episodeId, serieId });

  return (
    <Context.Provider
      value={{
        episode: episodeQuery,
        nextEpisodes: nextEpisodesQuery,
      }}
    >
      {children}
    </Context.Provider>
  );
};

type ProviderWatchStoreProps = {
  episodeId: string;
  serieId: string;
};
