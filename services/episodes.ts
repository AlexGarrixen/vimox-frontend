import { request } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import { EPISODES } from '@utils/endpoints';
import type {
  GetEpisodesParams,
  GetEpisodesResponse,
  Episode,
} from '@globalTypes/episodeServices';

export const getEpisodes = async <T extends GetEpisodesResponse>(
  params: GetEpisodesParams = {}
) => {
  try {
    const { data } = await request<T>(EPISODES, { params });
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const getEpisode = async <T extends Episode>(episodeId: string) => {
  try {
    const { data } = await request<T>(`${EPISODES}/${episodeId}`);
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};
