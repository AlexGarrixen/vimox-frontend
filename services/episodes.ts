import { request } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import routes from '@config/apiRoutes';
import type {
  GetEpisodesParams,
  GetEpisodesResponse,
  ResponseGetEpisode,
  ResponseGetNextEpisodes,
} from '@globalTypes/episodeServices';

export const getEpisodes = async <T extends GetEpisodesResponse>(
  params: GetEpisodesParams = {}
) => {
  try {
    const { data } = await request<T>(routes.episodes.all, { params });
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const getEpisode = async <T extends ResponseGetEpisode>(
  episodeId: string
) => {
  try {
    const { data } = await request<T>(routes.episodes.getOne(episodeId));
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const getNextEpisodes = async (episodeId: string) => {
  try {
    const { data } = await request<ResponseGetNextEpisodes>(
      routes.episodes.getNextEpisodes(episodeId)
    );
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};
