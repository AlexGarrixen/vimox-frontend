import React from 'react';
import Slider from 'react-slick';
import { Context } from '../../Context';
import { SerieSlide } from '../SerieSlide';

type CarouselProps = {
  slideMinHeight: number;
};

export const Carousel = ({ slideMinHeight }: CarouselProps) => {
  const { refSliderNav, series, setRefSlider, activeIndex } = React.useContext(
    Context
  );

  return (
    <Slider
      slidesToShow={1}
      arrows={false}
      dots={false}
      fade={true}
      ref={setRefSlider}
      asNavFor={refSliderNav}
      swipe={false}
    >
      {Array.isArray(series) &&
        series.map(({ _id, name, geners }, idx) => (
          <SerieSlide
            key={_id}
            index={idx}
            id={_id}
            name={name}
            geners={geners}
            style={{ minHeight: slideMinHeight }}
            isActive={idx === activeIndex}
          />
        ))}
    </Slider>
  );
};
