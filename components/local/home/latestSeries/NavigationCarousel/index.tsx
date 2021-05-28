import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { Carousel } from './Carousel';
import { Root } from './styled';

export const NavigationCarousel = () => (
  <Root>
    <Container>
      <Typography as='h4' white>
        Ultimas series
      </Typography>
      <Spacing size={12} />
      <Carousel />
    </Container>
  </Root>
);
