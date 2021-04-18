import { request } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import { AUTH } from '@utils/endpoints';
import { PostLoginResponse } from '@globalTypes/authServices';

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
    const { data } = await request<PostLoginResponse>(`${AUTH}/login`, {
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

export const forgotPassword = async (email: string) => {
  try {
    const { data } = await request(`${AUTH}/forgot-password`, {
      method: 'post',
      data: { email },
    });

    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const resetPassword = async (
  newPassword: string,
  resetToken: string
) => {
  try {
    const { data } = await request(`${AUTH}/reset-password`, {
      method: 'put',
      data: { newPassword, resetToken },
    });

    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};
