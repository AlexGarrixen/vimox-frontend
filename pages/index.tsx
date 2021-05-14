import * as React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { LatestSeries } from '@pageSections/Home/LatestSeries';
import { LatestEpisodes } from '@pageSections/Home/LatestEpisodes';
import { LatestMovies } from '@pageSections/Home/LatestMovies';

const Home = () => (
  <LayoutApp title='Anime Online - GxAnime'>
    <LatestSeries />
    <LatestEpisodes />
    <LatestMovies />
  </LayoutApp>
);

export default Home;
