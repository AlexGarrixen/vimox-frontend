import React from 'react';
import { Spacing } from '@components/Layout/Spacing';
import LatestSeries from './sections/LatestSeries';
import LatestEpisodes from './sections/LatestEpisodes';
import LatestMovies from './sections/LatestMovies';
import { ProviderStore } from './contexts/Store';

const Home = () => (
  <ProviderStore>
    <LatestSeries />
    <Spacing size={80} />
    <LatestEpisodes />
    <Spacing size={80} />
    <LatestMovies />
    <Spacing size={30} />
  </ProviderStore>
);

export default Home;
