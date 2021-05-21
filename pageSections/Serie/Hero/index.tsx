import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';
import { TrailAnimation } from '@components/Animation/Trail';
import { ButtonAddQueue } from '@localComponents/serie/Hero/ButtonAddQueue';
import { CoverImage } from '@localComponents/serie/Hero/CoverImage';
import { Geners } from '@localComponents/serie/Hero/Geners';
import { Sinopsis } from '@localComponents/serie/Hero/Sinopsis';
import { Duration } from '@localComponents/serie/Hero/Duration';
import { Gener } from '@globalTypes/generServices';
import { Root, InformationBox } from './styled';

type HeroProps = {
  cover: string;
  name: string;
  sinopsis: string;
  geners: Gener[];
  duration: number;
};

export const Hero = ({
  name,
  sinopsis,
  cover,
  geners,
  duration,
}: HeroProps) => (
  <Root>
    <CoverImage src={cover} />
    <Container>
      <TrailAnimation animation='fadeSlideUp' show delay={700}>
        <Typography
          as='h2'
          xs='3xl'
          md='4xl'
          lg='5xl'
          white
          margin='0 0 18px 0'
        >
          {name.toUpperCase()}
        </Typography>
        <InformationBox>
          <Geners geners={geners} />
          <Duration duration={duration} />
        </InformationBox>
        <Sinopsis text={sinopsis} />
        <ButtonAddQueue />
      </TrailAnimation>
    </Container>
  </Root>
);
