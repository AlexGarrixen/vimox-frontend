import * as React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { CarouselLatestSeries } from '@pageComponents/Home/CarouselLatestSeries';
import { LatestEpisodes } from '@pageComponents/Home/LatestEpisodes';
import { LatestMovies } from '@pageComponents/Home/LatestMovies';

const Home = () => (
  <LayoutApp>
    <CarouselLatestSeries />
    <LatestEpisodes />
    <LatestMovies />
  </LayoutApp>
);

export default Home;
