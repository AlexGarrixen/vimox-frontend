import React from 'react';
import { useQuery } from 'react-query';
import { Container } from '@components/Layout/Container';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { getEpisodes } from '@services/episodes';
import { EpisodesGrid } from './EpisodesGrid';
import { Skeleton } from './Skeleton';
import { Root } from './styled';

export const LatestEpisodes = () => {
  const { data, isLoading, error, refetch } = useQuery(
    'latestEpisodes_home',
    () => getEpisodes({ sort_createdAt: 'desc', limit_items: 12 })
  );

  if (error)
    return (
      <ErrorMessage margin='80px 0 0 0' onClickRetry={refetch}>
        {error}
      </ErrorMessage>
    );

  if (isLoading) return <Skeleton />;

  return (
    <Root>
      <Container>
        <EpisodesGrid episodes={data.data} />
      </Container>
    </Root>
  );
};
