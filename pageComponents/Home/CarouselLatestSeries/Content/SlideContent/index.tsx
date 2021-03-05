import React from 'react';
import Link from 'next/link';
import { animated } from 'react-spring';
import { Play } from '@components/Icon/Play';
import { Typography } from '@components/DataDisplay/Typography';
import type { Gener } from '@globalTypes/generServices';
import { useAnimations } from './hook';
import { SlideContentBox, GenersBox } from './styled';

type SlideContentProps = {
  index: number;
  name: string;
  geners: Gener[];
  id: string;
  style?: React.CSSProperties;
};

export const SlideContent = ({
  index,
  id,
  name,
  geners,
  style,
}: SlideContentProps) => {
  const { headingCssProps, genersCssProps, playCssProps } = useAnimations(
    index
  );

  return (
    <SlideContentBox style={style}>
      <animated.div style={headingCssProps}>
        <Typography
          as='h2'
          xs='3xl'
          md='4xl'
          lg='5xl'
          margin='0 0 10px 0'
          white
        >
          {name}
        </Typography>
      </animated.div>
      <animated.div style={genersCssProps}>
        <GenersBox>
          {geners.map(({ _id, name }) => (
            <Typography key={_id} white>
              {name}
            </Typography>
          ))}
        </GenersBox>
      </animated.div>
      <animated.div style={playCssProps}>
        <Link href={`/serie/${id}`}>
          <a>
            <Play color='#fff' xxl margin='10px 0 0 0' />
          </a>
        </Link>
      </animated.div>
    </SlideContentBox>
  );
};
