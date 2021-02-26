import React from 'react';
import Slider from 'react-slick';
import { useMatchMedia } from '@hooks/useMatchMedia';
import { SlideEpisode } from './Slide';
import { EpisodesCarouselBox, ArrowsBox, ArrowButton } from './styled';
import { ArrowLeft } from '@components/Icon/ArrowLeft';
import { ArrowRight } from '@components/Icon/ArrowRight';

export const EpisodesCarousel = () => {
  const isScreenMd = useMatchMedia('(min-width: 960px)');
  const [slider, setSlider] = React.useState<Slider>(null);
  const next = () => slider.slickNext();
  const prev = () => slider.slickPrev();

  return !isScreenMd ? null : (
    <EpisodesCarouselBox>
      <Slider
        ref={setSlider}
        className='carousel'
        slidesToShow={1}
        arrows={false}
      >
        <SlideEpisode />
        <SlideEpisode />
      </Slider>
      <ArrowsBox>
        <ArrowButton onClick={next}>
          <ArrowRight color='#fff' />
        </ArrowButton>
        <ArrowButton onClick={prev}>
          <ArrowLeft color='#fff' />
        </ArrowButton>
      </ArrowsBox>
    </EpisodesCarouselBox>
  );
};
