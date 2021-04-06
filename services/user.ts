import { request } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import { GetUserSeries, PostUserSerie } from '@globalTypes/userServices';

export const getListOfSeries = async (userId: string) => {
  try {
    const { data } = await request<GetUserSeries>(`/user/${userId}/series`);
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const addSerieToList = async (serieId: string, userId: string) => {
  try {
    const { data } = await request<PostUserSerie>(`/user/${userId}/series`, {
      method: 'post',
      data: { serieId },
    });
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const deleteSerieOfList = async (serieId: string, userId: string) => {
  try {
    const { data } = await request(`/user/${userId}/series`, {
      method: 'delete',
      data: { serieId },
    });
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};
