import React from 'react';
import Slider from 'react-slick';
import { Context } from '../../Provider';
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
          <div key={_id}>
            <SerieSlide
              index={idx}
              id={_id}
              name={name}
              geners={geners}
              style={{ minHeight: slideMinHeight }}
              isActive={idx === activeIndex}
            />
          </div>
        ))}
    </Slider>
  );
};
