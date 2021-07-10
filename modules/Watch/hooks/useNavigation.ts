import React from 'react';
import slugify from 'slugify';
import { useRouter } from 'next/router';
import useEpisode from './useEpisode';

const useNavigation = () => {
  const router = useRouter();
  const {
    data: { nextEpisode, prevEpisode },
  } = useEpisode();

  const goNextEpisode = React.useCallback(
    () =>
      router.replace(
        `/watch/${slugify(nextEpisode.name)}?serieId=${
          nextEpisode.serie
        }&episodeId=${nextEpisode._id}`
      ),
    [router.query, nextEpisode]
  );

  const goPrevEpisode = React.useCallback(
    () =>
      router.replace(
        `/watch/${slugify(prevEpisode.name)}?serieId=${
          prevEpisode.serie
        }&episodeId=${prevEpisode._id}`
      ),
    [router.query, prevEpisode]
  );

  return {
    goNextEpisode,
    goPrevEpisode,
  };
};

export default useNavigation;
