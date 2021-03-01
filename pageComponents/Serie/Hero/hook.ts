import React from 'react';
import { useSpring } from 'react-spring';

const initialStyles = {
  opacity: 0,
  y: 22,
};

const activeStyles = {
  opacity: 1,
  y: 0,
};

export const useAnimations = () => {
  const [headingStyles, setHeadingStyles] = useSpring(() => initialStyles);

  const [genersStyles, setGenersStyles] = useSpring(() => initialStyles);

  const [sinopsis, setSinopsis] = useSpring(() => initialStyles);

  const headingCssProps = {
    opacity: headingStyles.opacity,
    transform: headingStyles.y.interpolate((v) => `translate3d(0, ${v}px, 0)`),
  };

  const genersCssProps = {
    opacity: genersStyles.opacity,
    transform: genersStyles.y.interpolate((v) => `translate3d(0, ${v}px, 0)`),
  };

  const sinopsisCssProps = {
    opacity: sinopsis.opacity,
    transform: sinopsis.y.interpolate((v) => `translate3d(0, ${v}px, 0)`),
  };

  React.useEffect(() => {
    setTimeout(() => setHeadingStyles(activeStyles), 450);
    setTimeout(() => setGenersStyles(activeStyles), 640);
    setTimeout(() => setSinopsis(activeStyles), 800);
  }, []);

  return {
    headingCssProps,
    genersCssProps,
    sinopsisCssProps,
  };
};
