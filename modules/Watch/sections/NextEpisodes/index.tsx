import React from 'react';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import NextEpisodesGrid from '@modules/Watch/components/NextEpisodesGrid';
import useNextEpisodes from '@modules/Watch/hooks/useNextEpisodes';

const NextEpisodes = () => {
  const { data, isLoading, isFetching, error, refetch } = useNextEpisodes();

  if (error) return <ErrorMessage onClickRetry={refetch}>{error}</ErrorMessage>;
  if (isLoading || isFetching) return null;
  if (!data) return null;
  return (
    <div>
      <Title level='3' size='lg' colorScheme='white'>
        Proximos episodios
      </Title>
      <Spacing size={16} />
      <NextEpisodesGrid />
    </div>
  );
};

export default NextEpisodes;
