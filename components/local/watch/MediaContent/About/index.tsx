import React from 'react';
import styled from 'styled-components';
import { Context } from '../../Provider';
import { Typography } from '@components/DataDisplay/Typography';

const AboutBox = styled.div`
  margin-top: 30px;
  max-width: ${({ theme }) => theme.screens.md};
`;

export const About = () => {
  const { episode } = React.useContext(Context);

  return (
    <AboutBox>
      <Typography as='h3' xs='lg' sm='xl' md='2xl' white margin='0 0 12px 0'>
        {episode.name.toUpperCase()}
      </Typography>
      <Typography as='h5' white margin='0 0 16px 0'>
        Episodeo {episode.order}
      </Typography>
      <Typography>{episode.sinopsis}</Typography>
    </AboutBox>
  );
};
