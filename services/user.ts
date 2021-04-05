import { request } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import { GetUserSeries } from '@globalTypes/userServices';

export const getListOfSeries = async (userId: string) => {
  try {
    const { data } = await request<GetUserSeries>(`user/${userId}/series`);
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};
