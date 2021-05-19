import { request } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import routes from '@config/apiRoutes';
import { ResponseSearchSerie } from '@globalTypes/searchServices';

export const searchSerie = async (params: { title?: string } = {}) => {
  try {
    const { data } = await request<ResponseSearchSerie>(routes.search.serie, {
      params,
    });
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};
