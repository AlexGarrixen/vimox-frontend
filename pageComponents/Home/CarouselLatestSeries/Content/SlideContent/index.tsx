import React from 'react';
import { animated } from 'react-spring';
import { Play } from '@components/Icon/Play';
import { Typography } from '@components/DataDisplay/Typography';
import { useAnimations } from './hook';
import { SlideContentBox, GenersBox } from './styled';

type SlideContentProps = {
  index: number;
};

export const SlideContent = ({ index }: SlideContentProps) => {
  const { headingCssProps, genersCssProps, playCssProps } = useAnimations(
    index
  );

  return (
    <SlideContentBox>
      <animated.div style={headingCssProps}>
        <Typography
          as='h2'
          xs='3xl'
          md='4xl'
          lg='5xl'
          margin='0 0 10px 0'
          white
        >
          NAME OF SERIE {index}
        </Typography>
      </animated.div>
      <animated.div style={genersCssProps}>
        <GenersBox>
          <Typography white>Action</Typography>
          <Typography white>Comedy</Typography>
          <Typography white>Other</Typography>
        </GenersBox>
      </animated.div>
      <animated.div style={playCssProps}>
        <Play color='#fff' xxl margin='10px 0 0 0' />
      </animated.div>
    </SlideContentBox>
  );
};
