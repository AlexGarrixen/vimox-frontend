import React from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { Carousel } from './Carousel';
import { Root } from './styled';

export const NavigationCarousel = () => (
  <Root>
    <Container>
      <Title level='4' colorScheme='white'>
        Ultimas series
      </Title>
      <Spacing size={12} />
      <Carousel />
    </Container>
  </Root>
);
