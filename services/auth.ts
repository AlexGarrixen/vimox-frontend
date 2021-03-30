import { request } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import { AUTH } from '@utils/endpoints';

interface SignupValues {
  username: string;
  email: string;
  password: string;
}

export const signup = async (values: SignupValues) => {
  try {
    const { data } = await request(`${AUTH}/signup`, {
      method: 'post',
      data: values,
    });
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};
