import { UseQueryResult } from 'react-query';
import { ResponseGetUserSeries } from '@globalTypes/userServices';

export type ContextValue = {
  queuedSeries: UseQueryResult<ResponseGetUserSeries, unknown>;
};
