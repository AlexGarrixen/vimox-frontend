import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';
import { Carousel } from './Carousel';
import { LatestMoviesBox } from './styled';

export const LatestMovies = () => (
  <LatestMoviesBox>
    <Container>
      <Typography as='h4' white margin='0 0 32px 0'>
        Ultimas peliculas
      </Typography>
      <Carousel />
    </Container>
  </LatestMoviesBox>
);
