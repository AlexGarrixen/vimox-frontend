import React from 'react';
import Slider from 'react-slick';

type ContextValue = {
  activeIndex: number;
  refSlider: Slider;
  refSliderNav: Slider;
  setRefSlider: (ref: Slider) => void;
  setRefSliderNav: (ref: Slider) => void;
  next: () => void;
  prev: () => void;
  setIndex: (index: number) => void;
  data: number[];
};

export const Context = React.createContext<Partial<ContextValue>>({});
