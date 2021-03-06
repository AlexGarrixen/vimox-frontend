import React from 'react';
import { useSpring } from 'react-spring';

const initialStyles = {
  opacity: 0,
};

const activeStyles = {
  opacity: 1,
};

export const useAnimations = () => {
  const [headingStyles, setHeadingStyles] = useSpring(() => initialStyles);

  const [genersStyles, setGenersStyles] = useSpring(() => initialStyles);

  const [sinopsis, setSinopsis] = useSpring(() => initialStyles);

  const headingCssProps = {
    opacity: headingStyles.opacity,
  };

  const genersCssProps = {
    opacity: genersStyles.opacity,
  };

  const sinopsisCssProps = {
    opacity: sinopsis.opacity,
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
