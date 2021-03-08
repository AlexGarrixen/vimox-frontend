import React from 'react';
import { useQuery } from 'react-query';
import { Container } from '@components/Layout/Container';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { getEpisodes } from '@services/episodes';
import { EpisodesList } from './EpisodesList';
import { Skeleton } from './Skeleton';
import { LatestEpisodesBox } from './styled';

export const LatestEpisodes = () => {
  const { data, isLoading, error, refetch } = useQuery(
    ['latestEpisodes_home', { sort_createdAt: 'desc', limit_items: 12 }],
    async ({ queryKey }) => getEpisodes(queryKey[1])
  );

  if (error)
    return (
      <ErrorMessage margin='80px 0 0 0' onClickRetry={refetch}>
        {error}
      </ErrorMessage>
    );

  if (isLoading) return <Skeleton />;

  return (
    <LatestEpisodesBox>
      <Container>
        <EpisodesList data={data} />
      </Container>
    </LatestEpisodesBox>
  );
};
