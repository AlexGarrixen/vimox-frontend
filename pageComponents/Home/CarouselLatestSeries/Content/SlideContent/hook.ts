import React from 'react';
import { useSpring } from 'react-spring';
import { Context } from '../../Context';

const initialStyles = {
  opacity: 0,
  y: 22,
};

const activeStyles = {
  opacity: 1,
  y: 0,
};

export const useAnimations = (indexSlide: number) => {
  const { activeIndex } = React.useContext(Context);

  const [headingStyles, setHeadingStyles] = useSpring(() => initialStyles);

  const [genersStyles, setGenersStyles] = useSpring(() => initialStyles);

  const [playStyles, setPlayStyles] = useSpring(() => initialStyles);

  const headingCssProps = {
    opacity: headingStyles.opacity,
    transform: headingStyles.y.interpolate((v) => `translate3d(0, ${v}px, 0)`),
  };

  const genersCssProps = {
    opacity: genersStyles.opacity,
    transform: genersStyles.y.interpolate((v) => `translate3d(0, ${v}px, 0)`),
  };

  const playCssProps = {
    opacity: playStyles.opacity,
    transform: playStyles.y.interpolate((v) => `translate3d(0, ${v}px, 0)`),
  };

  React.useEffect(() => {
    if (indexSlide === activeIndex) {
      setTimeout(() => setHeadingStyles(activeStyles), 450);
      setTimeout(() => setGenersStyles(activeStyles), 640);
      setTimeout(() => setPlayStyles(activeStyles), 800);
    } else {
      setTimeout(() => {
        setHeadingStyles(initialStyles);
        setGenersStyles(initialStyles);
        setPlayStyles(initialStyles);
      }, 350);
    }
  }, [activeIndex]);

  return {
    headingCssProps,
    genersCssProps,
    playCssProps,
  };
};
