import { request } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import { GENERS } from '@utils/endpoints';
import type { Gener } from '@globalTypes/generServices';

export const getGeners = async <T extends Gener[]>() => {
  try {
    const { data } = await request<T>(GENERS);
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};
