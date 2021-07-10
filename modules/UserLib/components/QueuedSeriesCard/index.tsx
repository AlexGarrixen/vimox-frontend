import React from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { IconButton } from '@components/Form/IconButton';
import { TrashOutlined } from '@components/Icon/TrashOutlined';
import { UserSerie } from '@globalTypes/userServices';
import useRemoveOfQueue from '@modules/UserLib/hooks/useRemoveOfQueue';
import {
  QueueSerieBox,
  ImageBox,
  ImageStyled,
  ContentBox,
  ActionsBox,
} from './styled';

const QueuedSerie = ({ lastEpisodeWatched, serie }: UserSerie): JSX.Element => {
  const { handleDeleteSerie, isLoading } = useRemoveOfQueue({
    serieId: serie._id,
    serieName: serie.name,
  });

  return (
    <QueueSerieBox>
      <ImageBox>
        <ImageStyled src={lastEpisodeWatched.thumbnail} />
      </ImageBox>
      <ContentBox>
        <Title level='5' colorScheme='white'>
          {serie.name}
        </Title>
        <Text colorScheme='secondary'>
          Episodio {lastEpisodeWatched.order} - {lastEpisodeWatched.name}
        </Text>
      </ContentBox>
      <ActionsBox>
        <IconButton
          colorScheme='danger'
          onClick={handleDeleteSerie}
          disabled={isLoading}
        >
          <TrashOutlined />
        </IconButton>
      </ActionsBox>
    </QueueSerieBox>
  );
};

export default QueuedSerie;
