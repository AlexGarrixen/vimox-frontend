import React from 'react';
import styled from 'styled-components';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';

const AboutBox = styled.div`
  margin: 30px 0;
`;

export const About = () => (
  <AboutBox>
    <Container>
      <Typography as='h3' xs='lg' sm='xl' md='2xl' white margin='0 0 12px 0'>
        TITULO DEL EPISODEO
      </Typography>
      <Typography as='h5' white margin='0 0 16px 0'>
        Episodeo 1
      </Typography>
      <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        porro! Ullam velit iste possimus, nemo magni consequatur harum
        aspernatur tempore, quidem ex repellendus at voluptatem. Inventore at
        eveniet distinctio ducimus.
      </Typography>
    </Container>
  </AboutBox>
);
