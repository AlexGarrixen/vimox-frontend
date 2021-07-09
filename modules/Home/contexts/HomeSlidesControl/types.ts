import { Dispatch } from 'react';
import Slider from 'react-slick';

export type ContextValue = {
  activeSlide: number;
  setActiveSlide: Dispatch<number>;
  slider: {
    ref: Slider | null;
    setRef: Dispatch<Slider | null>;
  };
  navSlider: {
    ref: Slider | null;
    setRef: Dispatch<Slider | null>;
  };
};
