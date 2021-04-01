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

export const emailConfirmation = async (token: string) => {
  try {
    const { data } = await request(`${AUTH}/email-verification`, {
      method: 'post',
      params: {
        token,
      },
    });
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const { data } = await request(`${AUTH}/login`, {
      method: 'post',
      data: {
        email,
        password,
      },
    });
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};
