import { UseQueryResult } from 'react-query';
import { ResponseGetOneSerie } from '@globalTypes/serieServices';

export type ContextValue = {
  serie: UseQueryResult<ResponseGetOneSerie, unknown>;
};
