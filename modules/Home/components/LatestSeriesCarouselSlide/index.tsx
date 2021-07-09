import React from 'react';
import Link from 'next/link';
import { PlayOutlined } from '@components/Icon/PlayOutlined';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { TrailAnimation } from '@components/Animation/Trail';
import { Wrapper, GenersBox } from './styled';

const SerieSlide = ({ id, name, geners, style, isActive }: SerieSlideProps) => (
  <Wrapper style={style} isActive={isActive}>
    <TrailAnimation animation='fadeSlideUp' show={isActive} delay={700}>
      <Title
        level='2'
        colorScheme='white'
        size={{ xs: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
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
          <PlayOutlined
            colorScheme='white'
            size={40}
            style={{ marginTop: 10 }}
          />
        </a>
      </Link>
    </TrailAnimation>
  </Wrapper>
);

type SerieSlideProps = {
  name: string;
  geners: string[];
  id: string;
  style?: React.CSSProperties;
  isActive?: boolean;
};

export default SerieSlide;
