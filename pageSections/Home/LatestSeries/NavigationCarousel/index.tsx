import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';
import { Carousel } from './Carousel';
import { Root } from './styled';

export const NavigationCarousel = () => (
  <Root>
    <Container>
      <Typography as='h4' white margin='0 0 12px 0'>
        Ultimas series
      </Typography>
      <Carousel />
    </Container>
  </Root>
);
