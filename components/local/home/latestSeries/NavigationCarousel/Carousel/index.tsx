import React from 'react';
import Slider from 'react-slick';
import { Context } from '../../Provider';
import { ChevronLeftFilled } from '@components/Icon/ChevronLeftFilled';
import { ChevronRightFilled } from '@components/Icon/ChevronRightFilled';
import { ThumbnailSlide } from '../ThumbnailSlide';
import { Root, ArrowButton } from './styled';

export const Carousel = () => {
  const {
    activeIndex,
    refSlider,
    setIndex,
    series,
    setRefSliderNav,
    next,
    prev,
  } = React.useContext(Context);

  return (
    <Root>
      <ArrowButton onClick={prev}>
        <ChevronLeftFilled />
      </ArrowButton>
      <Slider
        slidesToShow={4}
        arrows={false}
        className='carousel'
        ref={setRefSliderNav}
        beforeChange={(currentSlide, nextSlide) => setIndex(nextSlide)}
        asNavFor={refSlider}
        responsive={[
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
        {Array.isArray(series) &&
          series.map(({ _id, thumbnail }, idx) => (
            <ThumbnailSlide
              key={_id}
              img={thumbnail}
              isActive={idx === activeIndex}
              serieId={_id}
            />
          ))}
      </Slider>
      <ArrowButton toRight onClick={next}>
        <ChevronRightFilled />
      </ArrowButton>
    </Root>
  );
};
