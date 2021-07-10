import React, { FC, useMemo, useState } from 'react';
import { Context } from './Context';

export const ProviderHomeSlidesControl: FC = ({ children }) => {
  const [refSlider, setRefSlider] = useState(null);
  const [refNavSlider, setRefNavSlider] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const contextValue = useMemo(
    () => ({
      activeSlide,
      setActiveSlide,
      slider: {
        ref: refSlider,
        setRef: setRefSlider,
      },
      navSlider: {
        ref: refNavSlider,
        setRef: setRefNavSlider,
      },
    }),
    [activeSlide, refSlider, refNavSlider]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
