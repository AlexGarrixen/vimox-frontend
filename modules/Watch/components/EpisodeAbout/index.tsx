import React from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { Spacing } from '@components/Layout/Spacing';
import useEpisode from '@modules/Watch/hooks/useEpisode';
import { Wrapper } from './styled';

const EpisodeAbout = () => {
  const {
    data: { episode },
  } = useEpisode();

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default EpisodeAbout;
