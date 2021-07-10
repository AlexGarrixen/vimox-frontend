import { UseQueryResult } from 'react-query';
import {
  ResponseGetOneEpisode,
  ResponseGetNextEpisodes,
} from '@globalTypes/episodeServices';

export type ContextValue = {
  episode: UseQueryResult<ResponseGetOneEpisode, unknown>;
  nextEpisodes: UseQueryResult<ResponseGetNextEpisodes, unknown>;
};
