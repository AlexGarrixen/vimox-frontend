import React from 'react';
import { useRouter } from 'next/router';
import { Context } from '../../Provider';
import type { Episode } from '@globalTypes/episodeServices';

export const useNavigation = () => {
  const { episodesSerie, episode } = React.useContext(Context);
  const router = useRouter();

  const episodesByOrder = React.useMemo(() => {
    const map: Record<number, Episode> = {};

    for (const ep of episodesSerie) {
      map[ep.order] = ep;
    }

    return map;
  }, [episodesSerie]);

  const nextEpisode = React.useMemo(() => episodesByOrder[episode.order + 1], [
    episodesByOrder,
  ]);

  const prevEpisode = React.useMemo(() => episodesByOrder[episode.order - 1], [
    episodesByOrder,
  ]);

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
    nextEpisode,
  };
};
