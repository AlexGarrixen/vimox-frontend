import React from 'react';
import Slider from 'react-slick';

export const useCarousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [refSlider, setRefSlider] = React.useState<Slider>(null);
  const [refSliderNav, setRefSliderNav] = React.useState<Slider>(null);
  const data = [0, 1, 2, 3, 4, 5, 6];

  const next = () => refSliderNav.slickNext();

  const prev = () => refSliderNav.slickPrev();

  const setIndex = (index: number) => setActiveIndex(index);

  return {
    activeIndex,
    refSlider,
    refSliderNav,
    setIndex,
    setRefSlider,
    setRefSliderNav,
    prev,
    next,
    data,
  };
};
