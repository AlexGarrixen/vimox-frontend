import React from 'react';
import { animated } from 'react-spring';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';
import { Gener } from '@globalTypes/generServices';
import { useReadMore } from '@hooks/useReadMore';
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
  const { text, showReadMore, showFullText, handleToggle } = useReadMore(
    sinopsis,
    120
  );

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
          <Typography>
            {text}
            {showReadMore && (
              <Typography
                as='span'
                white
                onClick={handleToggle}
                style={{ cursor: 'pointer' }}
              >
                {showFullText ? ' menos' : ' ...más'}
              </Typography>
            )}
          </Typography>
        </animated.div>
      </Container>
    </HeroBox>
  );
};
