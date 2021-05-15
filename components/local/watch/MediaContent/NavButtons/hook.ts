import React from 'react';
import { useRouter } from 'next/router';
import { Context } from '../../Provider';

export const useNavigation = () => {
  const { nextEpisode, prevEpisode } = React.useContext(Context);
  const router = useRouter();

  const handleNextEpisode = React.useCallback(
    () =>
      router.replace(
        `/watch?serieId=${router.query.serieId}&episodeId=${nextEpisode._id}`
      ),
    [router.query, nextEpisode]
  );

  const handlePrevEpisode = React.useCallback(
    () =>
      router.replace(
        `/watch?serieId=${router.query.serieId}&episodeId=${prevEpisode._id}`
      ),
    [router.query, prevEpisode]
  );

  return {
    handleNextEpisode,
    handlePrevEpisode,
  };
};
