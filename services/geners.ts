import { request } from '@utils/request';
import routes from '@config/apiRoutes';
import { Gener } from '@globalTypes/generServices';

export const getGeners = () =>
  request<Gener[]>(routes.geners.all).then(({ data }) => data);
