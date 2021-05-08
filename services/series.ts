import { request } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import routes from '@config/apiRoutes';
import type {
  GetSeriesParams,
  GetSeriesResponse,
  Serie,
} from '@globalTypes/serieServices';

export const getSeries = async <T extends GetSeriesResponse>(
  params: GetSeriesParams = {}
) => {
  try {
    const { data } = await request<T>(routes.series.all, { params });
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const getSerie = async <T extends Serie>(serieId: string) => {
  try {
    const { data } = await request<T[]>(routes.series.getOne(serieId));
    return data[0];
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};
