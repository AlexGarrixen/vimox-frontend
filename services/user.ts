import { request } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import { GetUserSeries, PostUserSerie } from '@globalTypes/userServices';
import routes from '@config/apiRoutes';

export const getListOfSeries = async (userId: string) => {
  try {
    const { data } = await request<GetUserSeries>(
      routes.user.getSeries(userId)
    );
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const addSerieToList = async (serieId: string, userId: string) => {
  try {
    const { data } = await request<PostUserSerie>(
      routes.user.postSerie(userId),
      {
        method: 'post',
        data: { serieId },
      }
    );
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const deleteSerieOfList = async (serieId: string, userId: string) => {
  try {
    const { data } = await request(routes.user.deleteSerie(userId, serieId), {
      method: 'delete',
    });
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

interface UpdateLastEpisodeWatchedOptions {
  serieId: string;
  episodeId: string;
  userId: string;
}

export const updateLastEpisodeWatched = async ({
  episodeId,
  serieId,
  userId,
}: UpdateLastEpisodeWatchedOptions) => {
  try {
    const { data } = await request(routes.user.lastEpisodeWatched(userId), {
      method: 'put',
      data: {
        lastEpisodeWatched: episodeId,
        serieId,
      },
    });

    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};
