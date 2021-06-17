import React from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { Typography } from '@components/DataDisplay/Typography';
import { Trash } from '@components/Icon/Trash';
import { UserSerie, ResponseGetUserSeries } from '@globalTypes/userServices';
import { ResponseGetSeries } from '@globalTypes/serieServices';
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
  _id,
}: UserSerie): JSX.Element => {
  const mutation = useMutation((serieId: string) =>
    deleteSerieOfList(serieId, userId)
  );

  const handleDeleteSerie = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();

    mutation
      .mutateAsync(serie._id)
      .then(() => {
        toast.info(`Removiste ${serie.name} de tu lista`);

        const previousData = queryClient.getQueryData<ResponseGetUserSeries>([
          'user-series',
          userId,
        ]);
        const previousDirectorySeries = queryClient.getQueryData<ResponseGetSeries>(
          'series_directory'
        );

        if (previousData) {
          queryClient.setQueryData(
            ['user-series', userId],
            previousData.filter((serie) => serie._id !== _id)
          );
        } else {
          queryClient.invalidateQueries(['user-series', userId]);
        }

        if (previousDirectorySeries) {
          previousDirectorySeries.series = previousDirectorySeries.series.map(
            (item) => {
              if (item._id === serie._id) {
                item.isInQueue = false;
                return item;
              } else return item;
            }
          );

          queryClient.setQueryData('series_directory', previousDirectorySeries);
        }
      })
      .catch((reason) => {
        toast.error(reason);
      });
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
        <DeleteButton onClick={handleDeleteSerie} disabled={mutation.isLoading}>
          <Trash />
        </DeleteButton>
      </ActionsBox>
    </QueueSerieBox>
  );
};
