import React from 'react';
import { useSpring } from 'react-spring';
import { Context } from '../../Provider/Context';

const initialStyles = {
  opacity: 0,
};

const activeStyles = {
  opacity: 1,
};

export const useAnimations = (indexSlide: number) => {
  const { activeIndex } = React.useContext(Context);

  const [headingStyles, setHeadingStyles] = useSpring(() => initialStyles);

  const [genersStyles, setGenersStyles] = useSpring(() => initialStyles);

  const [playStyles, setPlayStyles] = useSpring(() => initialStyles);

  const headingCssProps = {
    opacity: headingStyles.opacity,
  };

  const genersCssProps = {
    opacity: genersStyles.opacity,
  };

  const playCssProps = {
    opacity: playStyles.opacity,
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
