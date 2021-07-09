import { UseQueryResult } from 'react-query';
import { ResponseGetSeries } from '@globalTypes/serieServices';
import { ResponseGetEpisodes } from '@globalTypes/episodeServices';

export type ContextValue = {
  latestSeries: UseQueryResult<ResponseGetSeries, unknown>;
  latestEpisodes: UseQueryResult<ResponseGetEpisodes, unknown>;
  latestMovies: UseQueryResult<ResponseGetSeries, unknown>;
};
