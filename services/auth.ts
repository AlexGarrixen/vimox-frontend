import { request, requestApiRoute } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import {
  PostLoginResponse,
  ResponseGetSession,
} from '@globalTypes/authServices';

interface SignupValues {
  username: string;
  email: string;
  password: string;
}

export const signup = async (values: SignupValues) => {
  try {
    const { data } = await request('/auth/signup', {
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
    const { data } = await request('/auth/email-confirmation', {
      method: 'post',
      data: {
        emailToken: token,
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
    const { data } = await request<PostLoginResponse>('/auth/login', {
      method: 'post',
      auth: {
        username: email,
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
    const { data } = await request('/auth/forgot-password', {
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
    const { data } = await request('/auth/reset-password', {
      method: 'put',
      data: { newPassword, resetToken },
    });

    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const getSession = async () => {
  try {
    const { data } = await requestApiRoute<ResponseGetSession>('/auth/session');
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};
