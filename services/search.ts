import { request } from '@utils/request';
import routes from '@config/apiRoutes';
import { ResponseSearchSerie } from '@globalTypes/searchServices';

export const searchSerie = (querys: { title?: string } = {}) =>
  request<ResponseSearchSerie>(routes.search.serie, {
    params: querys,
  }).then(({ data }) => data);
