import React from 'react';
import styled from 'styled-components';
import { Context } from '../../Provider';
import { Typography } from '@components/DataDisplay/Typography';
import { Spacing } from '@components/Layout/Spacing';

const AboutBox = styled.div`
  max-width: ${({ theme }) => theme.screens.md};
`;

export const About = () => {
  const { episode } = React.useContext(Context);

  return (
    <AboutBox>
      <Typography as='h3' xs='lg' sm='xl' md='2xl' white>
        {episode.name.toUpperCase()}
      </Typography>
      <Spacing size={12} />
      <Typography as='h5' white>
        Episodeo {episode.order}
      </Typography>
      <Spacing size={16} />
      <Typography>{episode.sinopsis}</Typography>
    </AboutBox>
  );
};
