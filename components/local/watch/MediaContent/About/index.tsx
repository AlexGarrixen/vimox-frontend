import React from 'react';
import styled from 'styled-components';
import { Context } from '../../Provider';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { Spacing } from '@components/Layout/Spacing';

const AboutBox = styled.div`
  max-width: ${({ theme }) => theme.screens.md};
`;

export const About = () => {
  const { episode } = React.useContext(Context);

  return (
    <AboutBox>
      <Title
        level='3'
        colorScheme='white'
        size={{ xs: 'lg', sm: 'xl', md: '2xl' }}
      >
        {episode.name.toUpperCase()}
      </Title>
      <Spacing size={12} />
      <Title level='5' colorScheme='white'>
        Episodio {episode.order}
      </Title>
      <Spacing size={16} />
      <Text colorScheme='secondary'>{episode.sinopsis}</Text>
    </AboutBox>
  );
};
