import React from 'react';
import { animated } from 'react-spring';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';
import { ButtonAddQueue } from '@localComponents/serie/Hero/ButtonAddQueue';
import { CoverImage } from '@localComponents/serie/Hero/CoverImage';
import { Geners } from '@localComponents/serie/Hero/Geners';
import { Sinopsis } from '@localComponents/serie/Hero/Sinopsis';
import { Duration } from '@localComponents/serie/Hero/Duration';
import { Gener } from '@globalTypes/generServices';
import { Root, InformationBox } from './styled';
import { useAnimations } from './hook';

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
}: HeroProps) => {
  const { headingCssProps, genersCssProps, sinopsisCssProps } = useAnimations();

  return (
    <Root>
      <CoverImage src={cover} />
      <Container>
        <animated.div style={headingCssProps}>
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
        </animated.div>
        <animated.div style={genersCssProps}>
          <InformationBox>
            <Geners geners={geners} />
            <Duration duration={duration} />
          </InformationBox>
        </animated.div>
        <animated.div style={sinopsisCssProps}>
          <Sinopsis text={sinopsis} />
          <ButtonAddQueue />
        </animated.div>
      </Container>
    </Root>
  );
};
