import * as React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { CarouselLatestSeries } from '@pageComponents/Home/CarouselLatestSeries';

const Home = () => (
  <LayoutApp>
    <CarouselLatestSeries />
  </LayoutApp>
);

export default Home;
