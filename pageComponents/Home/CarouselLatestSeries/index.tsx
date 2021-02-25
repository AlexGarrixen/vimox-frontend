import React from 'react';
import { Provider } from './Provider';
import { CoverImage } from './CoverImage';
import { Content } from './Content';
import { NavSlider } from './NavSlider';
import { CarouselBox } from './styled';

export const CarouselLatestSeries = () => (
  <Provider>
    <CarouselBox>
      <CoverImage />
      <Content />
      <NavSlider />
    </CarouselBox>
  </Provider>
);
