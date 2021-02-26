import * as React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { CarouselLatestSeries } from '@pageComponents/Home/CarouselLatestSeries';
import { LatestEpisodes } from '@pageComponents/Home/LatestEpisodes';

const Home = () => (
  <LayoutApp>
    <CarouselLatestSeries />
    <LatestEpisodes />
  </LayoutApp>
);

export default Home;
