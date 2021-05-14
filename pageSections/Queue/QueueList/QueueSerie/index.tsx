import React from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { Typography } from '@components/DataDisplay/Typography';
import { Trash } from '@components/Icon/Trash';
import { UserSerie } from '@globalTypes/userServices';
import { deleteSerieOfList } from '@services/user';
import { queryClient } from '@utils/queryClient';
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
}: UserSerie): JSX.Element => {
  const mutation = useMutation((serieId: string) =>
    deleteSerieOfList(serieId, userId)
  );

  const handleDeleteSerie = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();

    try {
      await mutation.mutateAsync(serie._id);
      queryClient.invalidateQueries('user-series');
      toast.info(`Removiste ${serie.name} de tu lista`);
    } catch (reason) {
      toast.error(reason);
    }
  };

  return (
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
        <DeleteButton onClick={handleDeleteSerie}>
          <Trash />
        </DeleteButton>
      </ActionsBox>
    </QueueSerieBox>
  );
};
