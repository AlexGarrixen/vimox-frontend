import React from 'react';
import Measure from 'react-measure';
import styled from 'styled-components';
import { Container } from '@components/Layout/Container';
import { Carousel } from './Carousel';

const Root = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 60px;
`;

export const InformationCarousel = () => {
  const [height, setHeight] = React.useState(0);

  return (
    <Root>
      <Measure
        bound
        onResize={(contentRect) => {
          contentRect.entry && setHeight(contentRect.entry.height);
        }}
      >
        {({ measureRef }) => (
          <Container ref={measureRef}>
            <Carousel slideMinHeight={height} />
          </Container>
        )}
      </Measure>
    </Root>
  );
};
