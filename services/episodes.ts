import { request } from '@utils/request';
import routes from '@config/apiRoutes';
import {
  ResponseGetEpisodes,
  ResponseGetOneEpisode,
  ResponseGetNextEpisodes,
} from '@globalTypes/episodeServices';

export const getEpisodes = (
  querys: {
    sort_createdAt?: 'asc' | 'desc';
    sort_release?: 'asc' | 'desc';
    limit_items?: number;
    of_serieId?: string;
    page_index?: number;
    release?: 'today' | 'last_premieres';
  } = {}
) =>
  request<ResponseGetEpisodes>(routes.episodes.all, { params: querys }).then(
    ({ data }) => data
  );

export const getEpisode = (episodeId: string) =>
  request<ResponseGetOneEpisode>(routes.episodes.getOne(episodeId)).then(
    ({ data }) => data
  );

export const getNextEpisodes = (episodeId: string) =>
  request<ResponseGetNextEpisodes>(
    routes.episodes.getNextEpisodes(episodeId)
  ).then(({ data }) => data);
