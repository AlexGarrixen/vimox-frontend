import React from 'react';
import styled from 'styled-components';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';

const AboutBox = styled.div`
  margin: 30px 0;
`;

type AboutProps = {
  name: string;
  order: number;
  sinopsis: string;
};

export const About = ({ name, order, sinopsis }: AboutProps) => (
  <AboutBox>
    <Container>
      <Typography as='h3' xs='lg' sm='xl' md='2xl' white margin='0 0 12px 0'>
        {name.toUpperCase()}
      </Typography>
      <Typography as='h5' white margin='0 0 16px 0'>
        Episodeo {order}
      </Typography>
      <Typography>{sinopsis}</Typography>
    </Container>
  </AboutBox>
);
