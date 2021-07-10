import React from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import EpisodesGrid from '@modules/Serie/components/EpisodesGrid';
import Skeleton from '@modules/Serie/components/EpisodesSkeleton';
import useSerie from '@modules/Serie/hooks/useSerie';

const Episodes = () => {
  const { data, isLoading } = useSerie();

  if (isLoading) return <Skeleton />;
  if (!data) return null;
  return (
    <Container>
      <Title level='4' colorScheme='white'>
        Lista de episodios
      </Title>
      <Spacing size={20} />
      <EpisodesGrid data={data.episodes} />
    </Container>
  );
};

export default Episodes;
