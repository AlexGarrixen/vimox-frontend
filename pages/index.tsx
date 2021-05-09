import * as React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { CarouselLatestSeries } from '@pageSections/Home/CarouselLatestSeries';
import { LatestEpisodes } from '@pageSections/Home/LatestEpisodes';
import { LatestMovies } from '@pageSections/Home/LatestMovies';

const Home = () => (
  <LayoutApp title='Anime Online - GxAnime'>
    <CarouselLatestSeries />
    <LatestEpisodes />
    <LatestMovies />
  </LayoutApp>
);

export default Home;
