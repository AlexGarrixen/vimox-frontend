import { request } from '@utils/request';
import routes from '@config/apiRoutes';
import { ResponseGetSeries, Serie } from '@globalTypes/serieServices';

export const getSeries = (
  querys: {
    page_index?: number;
    limit_items?: number;
    sort_createdAt?: 'asc' | 'desc';
    sort_release?: 'asc' | 'desc';
    release?: 'today' | 'last_premieres';
    type?: string;
    gener?: string;
    name?: string;
    title?: string;
  } = {}
) =>
  request<ResponseGetSeries>(routes.series.all, { params: querys }).then(
    ({ data }) => data
  );

export const getSerie = (serieId: string) =>
  request<Serie>(routes.series.getOne(serieId)).then(({ data }) => data);
