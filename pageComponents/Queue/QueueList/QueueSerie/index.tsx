import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Trash } from '@components/Icon/Trash';
import { UserSerie } from '@globalTypes/userServices';
import {
  QueueSerieBox,
  ImageBox,
  ImageStyled,
  ContentBox,
  ActionsBox,
  DeleteButton,
} from './styled';

export const QueueSerie = ({
  lastEpisodeWatched,
  serie,
  userId,
}: UserSerie): JSX.Element => (
  <QueueSerieBox>
    <ImageBox>
      <ImageStyled src={lastEpisodeWatched.thumbnail} />
    </ImageBox>
    <ContentBox>
      <Typography as='h5' white>
        {serie.name}
      </Typography>
      <Typography>
        Episodio {lastEpisodeWatched.order} - {lastEpisodeWatched.name}
      </Typography>
    </ContentBox>
    <ActionsBox>
      <DeleteButton
        onClick={(ev) => {
          ev.preventDefault();
        }}
      >
        <Trash />
      </DeleteButton>
    </ActionsBox>
  </QueueSerieBox>
);
