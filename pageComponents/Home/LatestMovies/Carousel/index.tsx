import React from 'react';
import Slider from 'react-slick';
import { Serie } from '@components/DataDisplay/Serie';
import { ChevronLeft } from '@components/Icon/ChevronLeft';
import { ChevronRight } from '@components/Icon/ChevronRight';
import { CarouselBox, ArrowButton } from './styled';

export const Carousel = () => {
  const [slider, setSlider] = React.useState<Slider>(null);

  const next = React.useCallback(() => slider.slickNext(), [slider]);

  const prev = React.useCallback(() => slider.slickPrev(), [slider]);

  return (
    <CarouselBox>
      <ArrowButton onClick={prev}>
        <ChevronLeft color='#fff' xl />
      </ArrowButton>
      <Slider
        ref={setSlider}
        arrows={false}
        slidesToShow={5}
        className='carousel'
        responsive={[
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
      >
        <Serie />
        <Serie />
        <Serie />
        <Serie />
        <Serie />
        <Serie />
      </Slider>
      <ArrowButton toRight onClick={next}>
        <ChevronRight color='#fff' xl />
      </ArrowButton>
    </CarouselBox>
  );
};
