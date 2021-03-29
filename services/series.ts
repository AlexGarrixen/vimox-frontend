import { request } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import { SERIES } from '@utils/endpoints';
import type {
  GetSeriesParams,
  GetSeriesResponse,
  Serie,
} from '@globalTypes/serieServices';

export const getSeries = async <T extends GetSeriesResponse>(
  params: GetSeriesParams = {}
) => {
  try {
    const { data } = await request<T>(SERIES, { params });
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const getSerie = async <T extends Serie>(serieId: string) => {
  try {
    const { data } = await request<T[]>(`${SERIES}/${serieId}`);
    return data[0];
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};
