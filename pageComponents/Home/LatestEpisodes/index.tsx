import React from 'react';
import { Container } from '@components/Layout/Container';
import { EpisodesList } from './EpisodesList';
import { EpisodesCarousel } from './EpisodesCarousel';
import { LatestEpisodesBox } from './styled';

export const LatestEpisodes = () => (
  <LatestEpisodesBox>
    <Container>
      <EpisodesList />
      <EpisodesCarousel />
    </Container>
  </LatestEpisodesBox>
);
