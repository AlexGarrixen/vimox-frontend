import React from 'react';
import { animated } from 'react-spring';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';
import { HeroBox, CoverImage, GenersBox } from './styled';
import { useAnimations } from './hook';

export const Hero = () => {
  const { headingCssProps, genersCssProps, sinopsisCssProps } = useAnimations();

  return (
    <HeroBox>
      <CoverImage src='/placeholderImage.svg' />
      <Container>
        <animated.div style={headingCssProps}>
          <Typography
            as='h2'
            xs='3xl'
            md='4xl'
            lg='5xl'
            white
            margin='0 0 22px 0'
          >
            TITULO DE LA SERIE
          </Typography>
        </animated.div>
        <animated.div style={genersCssProps}>
          <GenersBox>
            <Typography white>Action</Typography>
            <Typography white>Comedy</Typography>
            <Typography white>Otro</Typography>
          </GenersBox>
        </animated.div>
        <animated.div style={sinopsisCssProps}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            voluptatibus qui quis nobis quam error corporis, blanditiis aut
            quaerat ipsam iusto rem, quae quia impedit exercitationem commodi
            recusandae? Laudantium?
          </Typography>
        </animated.div>
      </Container>
    </HeroBox>
  );
};
