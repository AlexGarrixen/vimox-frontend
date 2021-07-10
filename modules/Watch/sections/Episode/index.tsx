import React from 'react';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Spacing } from '@components/Layout/Spacing';
import Player from '@modules/Watch/components/EpisodePlayer';
import NavigationControls from '@modules/Watch/components/EpisodeNavigation';
import About from '@modules/Watch/components/EpisodeAbout';
import Skeleton from '@modules/Watch/components/EpisodeSkeleton';
import useEpisode from '@modules/Watch/hooks/useEpisode';

const EpisodeContent = () => {
  const { data, isLoading, isFetching, error, refetch } = useEpisode();

  if (error) return <ErrorMessage onClickRetry={refetch}>{error}</ErrorMessage>;
  if (isLoading || isFetching) return <Skeleton />;
  if (!data) return null;
  return (
    <div>
      <Player />
      <Spacing size={24} />
      <NavigationControls />
      <Spacing size={30} />
      <About />
    </div>
  );
};

export default EpisodeContent;
