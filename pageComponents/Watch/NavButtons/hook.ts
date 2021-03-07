import React from 'react';
import { useRouter } from 'next/router';
import type { NavButtonsProps } from './index';
import type { Episode } from '@globalTypes/episodeServices';

export const useNavigation = ({
  currentEpisode,
  episodes,
}: NavButtonsProps) => {
  const router = useRouter();

  const episodesByOrder = React.useMemo(() => {
    const map: Record<number, Episode> = {};

    for (const ep of episodes) {
      map[ep.order] = ep;
    }

    return map;
  }, [episodes]);

  const nextEpisode = React.useMemo(
    () => episodesByOrder[currentEpisode.order + 1],
    [episodesByOrder]
  );

  const prevEpisode = React.useMemo(
    () => episodesByOrder[currentEpisode.order - 1],
    [episodesByOrder]
  );

  const handleNextEpisode = React.useCallback(
    () => router.replace(`/watch/${router.query.serieId}/${nextEpisode._id}`),
    [router.query, nextEpisode]
  );

  const handlePrevEpisode = React.useCallback(
    () => router.replace(`/watch/${router.query.serieId}/${prevEpisode._id}`),
    [router.query, prevEpisode]
  );

  return {
    handleNextEpisode,
    handlePrevEpisode,
    nextEpisode,
    prevEpisode,
  };
};
