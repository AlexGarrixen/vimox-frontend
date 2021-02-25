import React from 'react';
import Slider from 'react-slick';
import { Context } from '../Context';
import { Typography } from '@components/DataDisplay/Typography';
import { Image } from '@components/DataDisplay/Image';
import { Container } from '@components/Layout/Container';
import { ChevronLeft } from '@components/Icon/ChevronLeft';
import { ChevronRight } from '@components/Icon/ChevronRight';
import { NavSliderBox, SliderBox, Slide, ArrowButton } from './styled';

export const NavSlider = () => {
  const {
    activeIndex,
    refSlider,
    setIndex,
    data,
    setRefSliderNav,
    next,
    prev,
  } = React.useContext(Context);

  return (
    <NavSliderBox>
      <Container>
        <Typography as='h4' white margin='0 0 12px 0'>
          Latest series
        </Typography>
        <SliderBox>
          <ArrowButton onClick={prev}>
            <ChevronLeft lg />
          </ArrowButton>
          <Slider
            slidesToShow={4}
            arrows={false}
            className='carousel'
            ref={setRefSliderNav}
            beforeChange={(currentSlide, nextSlide) => setIndex(nextSlide)}
            asNavFor={refSlider}
            autoplay={true}
            autoplaySpeed={5000}
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
            {data.map((v, idx) => (
              <Slide key={idx} isActive={idx === activeIndex}>
                <Image src='/placeholderImage.svg' />
              </Slide>
            ))}
          </Slider>
          <ArrowButton toRight onClick={next}>
            <ChevronRight lg />
          </ArrowButton>
        </SliderBox>
      </Container>
    </NavSliderBox>
  );
};
