import { request } from '@utils/request';
import { errorHandler } from '@utils/errorHandlerAxios';
import { GENERS } from '@utils/endpoints';
import type { Gener } from '@globalTypes/generServices';

export const getGeners = async <T extends Gener[]>() => {
  try {
    const { data } = await request<T>(GENERS);
    return data;
  } catch (reason) {
    throw new Error(errorHandler(reason)).message;
  }
};
