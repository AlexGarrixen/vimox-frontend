import React from 'react';
import Link from 'next/link';
import { Play } from '@components/Icon/Play';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { TrailAnimation } from '@components/Animation/Trail';
import { Root, GenersBox } from './styled';

type SerieSlideProps = {
  name: string;
  geners: string[];
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
      <Title
        level='2'
        colorScheme='white'
        size={{ xs: '3xl', md: '4xl', lg: '5xl' }}
        style={{ marginBottom: 10 }}
      >
        {name}
      </Title>
      <GenersBox>
        {geners.map((gener, idx) => (
          <Text key={`${gener}-${idx}`} colorScheme='white'>
            {gener}
          </Text>
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
