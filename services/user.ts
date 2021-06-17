import { request } from '@utils/request';
import {
  ResponseGetUserSeries,
  ResponsePostUserSerie,
  ResponseGetUserSerie,
  UserSerie,
} from '@globalTypes/userServices';
import routes from '@config/apiRoutes';

export const getListOfSeries = (userId: string) =>
  request<ResponseGetUserSeries>(routes.user.getSeries(userId)).then(
    ({ data }) => data
  );

export const addSerieToList = (serieId: string, userId: string) =>
  request<ResponsePostUserSerie>(routes.user.postSerie(userId), {
    method: 'post',
    data: { serieId },
  }).then(({ data }) => data);

export const deleteSerieOfList = (serieId: string, userId: string) =>
  request(routes.user.deleteSerie(userId, serieId), {
    method: 'delete',
  }).then(({ data }) => data);

export const updateLastEpisodeWatched = ({
  episodeId,
  serieId,
  userId,
}: {
  serieId: string;
  episodeId: string;
  userId: string;
}) =>
  request<UserSerie>(routes.user.lastEpisodeWatched(userId, serieId), {
    method: 'put',
    data: {
      lastEpisodeWatched: episodeId,
    },
  }).then(({ data }) => data);

export const getUserSerie = (serieId: string, userId: string) =>
  request<ResponseGetUserSerie>(routes.user.getOneSerie(userId, serieId)).then(
    ({ data }) => data
  );
