import { Dispatch } from 'react';
import { UseQueryResult } from 'react-query';
import { ResponseGetSeries } from '@globalTypes/serieServices';

export type ContextValue = {
  latestReleases: UseQueryResult<ResponseGetSeries, unknown>;
  pagination: {
    page: number;
    setPage: Dispatch<number>;
  };
};
