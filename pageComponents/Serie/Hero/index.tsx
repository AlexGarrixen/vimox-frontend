import React from 'react';
import { animated } from 'react-spring';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';
import { Gener } from '@globalTypes/generServices';
import { HeroBox, CoverImage, GenersBox } from './styled';
import { useAnimations } from './hook';

type HeroProps = {
  cover: string;
  name: string;
  sinopsis: string;
  geners: Gener[];
};

export const Hero = ({ name, sinopsis, cover, geners }: HeroProps) => {
  const { headingCssProps, genersCssProps, sinopsisCssProps } = useAnimations();

  return (
    <HeroBox>
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
          <GenersBox>
            {geners.map(({ _id, name }) => (
              <Typography key={_id} white>
                {name}
              </Typography>
            ))}
          </GenersBox>
        </animated.div>
        <animated.div style={sinopsisCssProps}>
          <Typography>{sinopsis}</Typography>
        </animated.div>
      </Container>
    </HeroBox>
  );
};
