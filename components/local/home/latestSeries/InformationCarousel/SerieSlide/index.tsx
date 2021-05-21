import React from 'react';
import Link from 'next/link';
import { Play } from '@components/Icon/Play';
import { Typography } from '@components/DataDisplay/Typography';
import { TrailAnimation } from '@components/Animation/Trail';
import { Gener } from '@globalTypes/generServices';
import { Root, GenersBox } from './styled';

type SerieSlideProps = {
  name: string;
  geners: Gener[];
  id: string;
  style?: React.CSSProperties;
  isActive?: boolean;
};

export const SerieSlide = ({
  id,
  name,
  geners,
  style,
  isActive,
}: SerieSlideProps) => (
  <Root style={style} isActive={isActive}>
    <TrailAnimation animation='fadeSlideUp' show={isActive} delay={700}>
      <Typography as='h2' xs='3xl' md='4xl' lg='5xl' margin='0 0 10px 0' white>
        {name}
      </Typography>
      <GenersBox>
        {geners.map(({ _id, name }) => (
          <Typography key={_id} white>
            {name}
          </Typography>
        ))}
      </GenersBox>
      <Link href={`/serie/${id}`}>
        <a>
          <Play color='#fff' xxl margin='10px 0 0 0' />
        </a>
      </Link>
    </TrailAnimation>
  </Root>
);
