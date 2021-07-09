import React from 'react';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import EpisodesGrid from '@modules/Home/components/LatestEpisodesGrid';
import Skeleton from '@modules/Home/components/LatestEpisodesSkeleton';
import useLatestEpisodes from '@modules/Home/hooks/useLatestEpisodes';

const LatestEpisodes = () => {
  const { isLoading, error, refetch } = useLatestEpisodes();

  if (error) return <ErrorMessage onClickRetry={refetch}>{error}</ErrorMessage>;
  if (isLoading) return <Skeleton />;
  return (
    <Container>
      <Title level='4' colorScheme='white'>
        Ultimos Episodios
      </Title>
      <Spacing size={32} />
      <EpisodesGrid />
    </Container>
  );
};

export default LatestEpisodes;
