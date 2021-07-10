import React from 'react';
import Slider from 'react-slick';
import { ChevronLeftFilled } from '@components/Icon/ChevronLeftFilled';
import { ChevronRightFilled } from '@components/Icon/ChevronRightFilled';
import useSlidesControl from '@modules/Home/hooks/useSlidesControl';
import useLatestSeries from '@modules/Home/hooks/useLatestSeries';
import ThumbnailSlide from '@modules/Home/components/LatestSeriesNavCarouselSlide';
import { Wrapper, ArrowButton } from './styled';

const LatestSeriesNavCarousel = () => {
  const { data } = useLatestSeries();
  const { slider, navSlider, activeSlide, setActiveSlide } = useSlidesControl();

  return (
    <Wrapper>
      <ArrowButton onClick={navSlider.ref?.slickPrev}>
        <ChevronLeftFilled />
      </ArrowButton>
      <Slider
        slidesToShow={4}
        arrows={false}
        className='carousel'
        ref={(ref) => navSlider.setRef(ref)}
        beforeChange={(_, nextSlide) => setActiveSlide(nextSlide)}
        asNavFor={slider.ref}
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
        {Array.isArray(data.series) &&
          data.series.map(({ _id, thumbnail, name }, idx) => (
            <ThumbnailSlide
              key={_id}
              img={thumbnail}
              isActive={idx === activeSlide}
              serieId={_id}
              name={name}
            />
          ))}
      </Slider>
      <ArrowButton toRight onClick={navSlider.ref?.slickNext}>
        <ChevronRightFilled />
      </ArrowButton>
    </Wrapper>
  );
};

export default LatestSeriesNavCarousel;
