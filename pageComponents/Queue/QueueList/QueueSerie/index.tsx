import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Trash } from '@components/Icon/Trash';
import {
  QueueSerieBox,
  ImageBox,
  ImageStyled,
  ContentBox,
  ActionsBox,
  DeleteButton,
} from './styled';

export const QueueSerie = (): JSX.Element => (
  <QueueSerieBox>
    <ImageBox>
      <ImageStyled src='/placeholderImage.svg' />
    </ImageBox>
    <ContentBox>
      <Typography as='h5' white>
        Titulo de la serie
      </Typography>
      <Typography>Episodio 1 - Titulo del episodeo</Typography>
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
